const express = require('express');
const routes = express.Router();

const TorrentController = require('./app/controllers/TorrentController')
/**
 *  - List all torrents
 *  - List one Torrent
 *  - 
 */


routes.get('/', TorrentController.listTorrents)
routes.get('/search/:query', TorrentController.search)


// routes.get('/', (req, res) => {
//   return res.send('bla');
// })
module.exports = routes;