const express = require('express');
const routes = express.Router();

const api = require('./services/api')

routes.get('/teste', (req,res) => {
  return res.json(api)
})

routes.get('/', (req, res) => {
  return res.send('<h1>Léo</h1>')
})

module.exports = routes;