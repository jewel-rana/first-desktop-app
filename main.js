"use strict";
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;
function createWindow() {
    //create browser window
    win = new BrowserWindow({width: 800, height: 600, icon:__dirname + '/img/sysinfo.png'});

    //load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, '/gui/index.html'),
        protocol: 'file',
        slashes: true
    }));

    //open devtools
    win.webContents.openDevTools();

    win.on('closed', ()=> {
        win = null;
    });
}

app.on('ready', createWindow);

//quit when all window are closed
app.on('window-all-closed', ()=> {
    if( process.platform !== 'darwin'){
        app.quit();
    }
});