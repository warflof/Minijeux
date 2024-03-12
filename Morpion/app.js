const { Socket } = require('socket.io');
const express = require('express');

const app = express();
const http = require('http').createServer(app);
const path = require('path');
const port = 5500;

/**
 * @type {Socket}
 */

const io = require('socket.io')(http);

app.use('/bootstrap/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/bootstrap/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(express.static('public'));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/index.html'));
});

app.get('/games/tic-tac-toe', (req, res) => {
    res.sendFile(path.join(__dirname, 'templates/games/tic-tac-toe.html'));
});




http.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});



// Création de la room
let rooms = [];

io.on('connection', (socket) =>{
    console.log(`[Connexion au socket]: ${socket.id}`);

    socket.on(`playerData`, (player) => {
        console.log(`[playerData] ${player.username}`);
        let room = null;

        if(!player.roomId) {
            room = createRoom(player);
            console.log(`[Creation de la room]: ${room.id} - ${player.username}`);
        } else {
            room = rooms.find(r => r.id === player.roomId);

            if(room === undefined) {
                return;
            }

            player.roomId= room.id;
            room.players.push(player);
        }
        socket.join(room.id);
        
        io.to(socket.id).emit('join room', room.id);

        if(room.players.length === 2) {
            io.to(room.id).emit('start game', room.players);
        }


    });

    // ##### Evenements ######

    socket.on('get rooms', () => {
        io.to(socket.id).emit('list rooms', rooms);
    })

    socket.on('play', (player) => {
        io.to(player.roomId).emit('play', player);
    })

    socket.on('disconnect', () => {
        console.log(`[disconnect] - ${socket.id}`);
        let room = null;

        rooms.forEach(r => {
            r.players.forEach(p => {
                if(p.socketId === socket.id && p.host) {
                    room = r;
                    rooms = rooms.filter(r => r !== room);
                }
            })
        })
    });
});



function createRoom(player) {
    const room = { id: roomId(), players: [] };

    player.roomId = room.id;
    room.players.push(player);
    rooms.push(room);

    return room;
}

function roomId() {
    return Math.random().toString(36).substring(2, 9);
}