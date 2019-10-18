const express = require('express');
const routes = express.Router();


/**
 *  - List all torrents
 *  - List one Torrent
 *  - 
 */


routes.get('/listAll', (req, res) => {
  return res.json({ msg: "Hello World" });
})


routes.get('/', (req, res) => {
  return res.json({ msg: "Hello World" });
})
module.exports = routes;