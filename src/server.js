const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const port = 3333;
const server = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-le6dz.mongodb.net/omnistack08?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

server.use(express.json());
server.use(routes);


server.listen(port);

console.log(`Application running on port ${port}`);