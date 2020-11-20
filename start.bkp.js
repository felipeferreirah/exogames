'use strict'
const { app } = require('electron')
const window   = require('./Window');

function main(){
    let win = new window({url:'localhost:3030/'})
}

app.on('ready', main)
app.on('window-all-closed',()=>{
    app.quit();
})
