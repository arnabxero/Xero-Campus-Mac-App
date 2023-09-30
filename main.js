const { app, BrowserWindow, screen } = require('electron');

function createWindow() {
    const mainScreen = screen.getPrimaryDisplay();
    const mainWindow = new BrowserWindow({
        width: mainScreen.bounds.width,
        height: mainScreen.bounds.height,
    });

    mainWindow.loadURL('https://campus.arnob.dev');

    mainWindow.on('closed', () => {
        app.quit();
    });
}

app.whenReady().then(createWindow);
