//Server script
const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const { availableParallelism } = require('node:os');
const cluster = require('node:cluster');
const { createAdapter, setupPrimary } = require('@socket.io/cluster-adapter');
const { Console } = require('node:console');
const port = 5500;


if(cluster.isPrimary) {
    const numCPUs = availableParallelism();
    // create one worker per available core
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork({
            PORT: port + i
        });
    }

    return setupPrimary();
}


async function main() {


    // Open DB
    const db = await open({
        filename: 'chat.db',
        driver: sqlite3.Database
    });

    // Create Table
    await db.exec(`
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            client_offset TEXT UNIQUE,
            content TEXT
        );
    `);



const app = express();
const server = createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {},
    // Configure l'adaptateur pour chaque thread d'utilisateir
    adapter: createAdapter()
});

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', async (socket) => {
    socket.on('chat message', async (msg, clientOffset, callback) => {
        let result;
        try {
        result = await db.run('INSERT INTO messages (content, client_offset) VALUES (?, ?)', msg, clientOffset);
        } catch (e) {
            if(e.errno === 19 /* SQLITE_CONSTRAINT */) {
                // the message was already inserted, so we notify the client
                callback();
            } else {
                // Laisse le client réessayer de se connecter
            }
            return;
        }
        // Placer l'affichage des messages ici
        io.emit('chat message', msg, result.lastID);

        callback();
    });

    if(!socket.recovered) {
        // Si la connexion n'est pas un succès
        try {
            await db.each('SELECT id, content FROM messages WHERE id > ?',
                [socket.handshake.auth.serverOffset || 0],
                (_err, row) => {
                    socket.emit('chat message', row.content, row.id);
                }
            )
        } catch (e) {
            // Erreur
            console.log('erreur');
        }
    }
});

const d_Port = process.env.PORT;

server.listen(d_Port, () => {
    console.log(`server running at http://localhost:${port}`);
});

}

main();