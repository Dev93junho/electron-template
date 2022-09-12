const { app, BrowserWindow } = require('electron');
app.disableHardwareAcceleration();

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
  let options = {};
  PythonShell.run('app.py', options, function (err, results) {
    if (err) console.log(err);
    console.log(results)
  });
}

app.on('ready', createWindow);