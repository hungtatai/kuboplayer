'use strict';


const _ = require('underscore')
const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow
const webContents = electron.webContents

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences: {webSecurity: false}})

  // and load the index.html of the app.
  // mainWindow.loadURL(`file://${__dirname}/index.html`)
  // mainWindow.loadURL("http://www.123kubo.com/vod-read-id-84855.html")

  var url = "http://www.123kubo.com/vod-play-id-84855-sid-1-pid-10.html";
  mainWindow.loadURL(url)


  var hideBody = _.once( () => {
    mainWindow.webContents.insertCSS(`
      body {
        display: none !important;
      }
    `)
    console.log("once")
  })
  var isDomReady = false;
  mainWindow.webContents.on("did-get-response-details", (
      event, 
      status, 
      newURL, 
      originalURL,
      httpResponseCode,
      requestMethod,
      referrer,
      headers,
      resourceType) => {

      if (! isDomReady ){
        mainWindow.webContents.insertCSS(`
          body {
            display: none !important;
          }
        `)
        // console.log("did-get-response-details")
      }
      
    // console.log ("did-get-response-details")

    // if (originalURL == url ||
    //    originalURL.match(new RegExp("http://forum.123kubo.com/.*")) ||
    //    originalURL.match(new RegExp(".*[.]js"))) {

    //   // event.preventDefault()
    //   console.log(originalURL)
    // } else {
    //   // console.log(event)
    //   // event.sender.stop()
    //   // event.preventDefault()
    // }

    // 
    

  })


  var oo = _.once(()=>{
    mainWindow.webContents.executeJavaScript(`
      var f = $("iframe[allowfullscreen]")[0];
      $("body").html(f);
      $(f).css("height", "100vh");
      
      var cl = function(){
        // $(f.contentDocument).find("#adtimeleft").bind("DOMSubtreeModified", function(){
          f.contentWindow.sk();
          $(f.contentDocument).find("#player")[0].play();
        // })
      }

      setTimeout(cl, 500)
      setTimeout(cl, 1000)
      setTimeout(cl, 1500)
      setTimeout(cl, 2000)
      setTimeout(cl, 2500)
      
      

    `, true, () => {})
  })

  mainWindow.webContents.on("dom-ready", (event) => {
    
    oo();
    // mainWindow.webContents.inspectElement(10, 10)


    mainWindow.webContents.insertCSS(`
      body {
        display: block !important;
      }
    `)

    isDomReady = true;
    console.log("dom-ready")
    // console.log(webContents.getAllWebContents())
  })

  mainWindow.webContents.on("did-frame-finish-load", (event) => {

    // if (event.sender.getURL().match(new RegExp("http://forum.123kubo.com/.*"))) {
      // console.log(event.sender.webContents)
    // }
    
  })

  // console.log(mainWindow.webContents.getAllWebContents())




  // mainWindow.loadURL("http://forum.123kubo.com/jx/show.php?url=aHR0cDovL3d3dy5nb29nbGUuY29tL1IxSTNSVVJJYVZNbE1rSjFibFZ1VUVoQ1pURllOazEyYURGVVJuUnJlR2xJTlNVeVFuZFFhVVJwUzFoYVFuTWxNMFE9", {
  //   "httpReferrer": "http://www.123kubo.com/vod-read-id-84855.html"
  // })


  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  // if (process.platform !== 'darwin') {
    app.quit()
  // }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
