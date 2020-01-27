const express = require('express');
const jokesRouter = require('../auth/jokes-router.js');

const server = express();

server.use(express.json());
server.use('/api/jokes', jokesRouter);

server.get('/', (req, res) => {
    res.send("💚 || If you can read this, it's working! ;) || 💚")
})

module.exports = server;