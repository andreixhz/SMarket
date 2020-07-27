import electron from 'electron';
import path from 'path';
import url from 'url';
import fs from 'fs';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let mainWindow;

const {ipcMain} = require('electron')

// *Funcoes devem ser exportadas pra serem acessiveis ao front-end
// Executa comando do SO e retorna resultado ao front-end
// Outro processo é o IPCMaine IPCRenderer
// https://electronjs.org/docs/api/ipc-main
// https://electronjs.org/docs/api/ipc-renderer


ipcMain.on('saveConfig', (event, args) =>  {

  let data = JSON.stringify(args);
  fs.writeFileSync('config.json', data);
  event.reply('saveConfigCallback', true);

});

ipcMain.on('initApp', (e, args) => {
  if (fs.existsSync('config.json')) {
    e.reply('initAppCallback', true)
  } else {
    e.reply('initAppCallback', false)
  }
});

ipcMain.on('getConfig', (e, args) => {
  fs.readFile('config.json', (err, data) => {
    if (err) throw err;
    const config = JSON.parse(data);
    e.reply('getConfig',config);
  });
})

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    
    // Caracteristicas visuais da janela
    // autoHideMenuBar: true,
    // titleBarStyle: 'customButtonsOnHover',
    frame: true, // Retira barra superior
    useContentSize: false, // Inibe mostragem de dimensao da janela

    webPreferences: {
      nodeIntegration: true
    }
  });
  //mainWindow.removeMenu();

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
