const express = require('express');
const routes = express.Router();

const TorrentController = require('./app/controllers/TorrentController')
/**
 *  - List all torrents
 *  - List one Torrent
 *  - 
 */


routes.get('/listTorrents', TorrentController.listTorrents)
routes.get('/listTorrent/:name', TorrentController.listTorrent)


routes.get('/', (req, res) => {
  return res.json({ msg: "Hello World" });
})
module.exports = routes;