const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const routes      = require('./routes');


class App {
  constructor(){
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({extended: false}))
  }

  routes() {
    this.app.use(routes)
  }
}

module.exports = new App().app;