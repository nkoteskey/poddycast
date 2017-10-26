const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow()
{
    win = new  BrowserWindow
    ({
        width: 1000,
        height: 600
    })

    win.loadURL(url.format
    ({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashed: true
    }))

    win.on("closed", () =>
    {
        app.quit()
    })
}

app.on("ready", createWindow)
