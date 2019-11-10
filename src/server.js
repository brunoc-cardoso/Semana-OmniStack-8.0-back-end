const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const port = 3333;
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectUsers = {};

io.on('connection', socket => {
  const { user } = socket.handshake.query;
  connectUsers[user] = socket.id;
});

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-le6dz.mongodb.net/omnistack08?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use((req, res, next) => {
  req.io = io;
  req.connectUsers = connectUsers;

  return next();
});

app.use(express.json());
app.use(cors());
app.use(routes);

server.listen(port);

console.log(`Application running on port ${port}`);

