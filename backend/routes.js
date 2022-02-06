const express = require('express');
const routes = express.Router();

const TorrentController = require('./app/controllers/TorrentController');
const HomeController = require('./app/controllers/HomeController')

routes.get('/', HomeController.index);
routes.get('/search/:query', TorrentController.search);

module.exports = routes;
