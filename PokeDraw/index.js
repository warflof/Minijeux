const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');

const app = express();
const server = createServer(app);

const port = 5500;

app.get('/', (req, res) =>{
    res.sendFile(join(__dirname, 'index.html'));
});

server.listen(port, () => {
    console.log(`Ecoute du port : ${port}`);
});