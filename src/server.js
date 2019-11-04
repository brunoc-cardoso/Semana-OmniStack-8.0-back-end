const express = require('express');

const port = 3333;
const server = express();

server.use(express.json());

server.listen(port);

console.log(`Application running on port ${port}`);