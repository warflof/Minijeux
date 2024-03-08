const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server, {
    connectionStateRecovery: {}
});

const port = 5500;

app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        // Placer l'affichage des messages ici
        io.emit('chat message', msg);
    });
});

server.listen(port, () => {
    console.log(`Le serv fonctionne sur le port ${port}`);
});