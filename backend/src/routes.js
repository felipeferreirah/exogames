const express = require('express');
const routes = express.Router();


/**
 *  - List all torrents
 *  - List one Torrent
 *  - 
 */


 routes.get('/showAll', (req, res) => {
   return res.json();
 })

module.exports = routes;