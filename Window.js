'use strict'

const { BrowserWindow } = require('electron');

// Configurações da janela
const defaultProps = {
    width:800,
    height:500,
    show:false,
}

class Window extends BrowserWindow {
    constructor ({url, ...windowSettings}){
        // constroi browserwindow com 2 parametros \/
        super({...defaultProps, ...windowSettings})

        //carrega um html
        this.loadURL(url)
        this.webContents.openDevTools;
        
        this.once('ready-to-show', ()=>{
            this.show();
        })
    }
}

module.exports = Window; 