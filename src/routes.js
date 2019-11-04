const express = require('express');

const routes = express.Router();

const DevController = require('./controllers/DevController');

routes.get('/', (req, res) => {
  return res.json({ message: 'The server is running' });
});

routes.post('/devs', DevController.store);

module.exports = routes;
