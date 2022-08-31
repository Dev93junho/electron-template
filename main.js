const { app, BrowserWindow } = require('electron');

function createWindow () {
    let win = new BrowserWindow ({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadFile('./index.html')
}

app.on('ready', createWindow);