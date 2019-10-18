const express = require('express');
const routes = express.Router();

const api = require('./services/api')

/**
 *  - List all torrents
 *  - List one Torrent
 *  - 
 */


 routes.get('/home', (req, res) => {
   return res.json();
 })

module.exports = routes;