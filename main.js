const { app, BrowserWindow } = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('./index.html')

  let {PythonShell} = require('python-shell')
  PythonShell.run('app.py', function (err, results) {
    if (err) console.log(err);
  });
}

app.on('ready', createWindow);