const express = require('express');

const routes = express.Router();

const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DeslikeController = require('./controllers/DeslikeController');

routes.get('/', (req, res) => {
  return res.json({ message: 'The server is running' });
});

routes.post('/devs', DevController.store);
routes.get('/devs', DevController.index);

routes.post('devs/:devID/likes', LikeController.store);
routes.post('devs/:devID/deslikes', DeslikeController.store);



module.exports = routes;
