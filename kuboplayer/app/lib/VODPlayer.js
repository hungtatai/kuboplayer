
'use strict'

const { BrowserWindow } = require('electron')



class VODPlayer {
  static open (url) {
    let win = new BrowserWindow({ width: 800, height: 600, webPreferences: { webSecurity: false } })
    win.loadURL(url)

    var isDomReady = false
    win.webContents.on('did-get-response-details', (
      event,
      status,
      newURL,
      originalURL,
      httpResponseCode,
      requestMethod,
      referrer,
      headers,
      resourceType) => {
      if (!isDomReady) {
        win.webContents.insertCSS(`
          body {
            display: none !important;
          }
        `)
      }
    })

    win.webContents.on('dom-ready', (event) => {
      win.webContents.executeJavaScript(`
      var f = $("iframe[allowfullscreen]")[0];
      $("body").html(f);
      $(f).css("height", "100vh");
      
      var cl = function(){
          f.contentWindow.sk();
          $(f.contentDocument).find("#player")[0].play();
      }

      setTimeout(cl, 500); setTimeout(cl, 1000); setTimeout(cl, 1500); setTimeout(cl, 2000); setTimeout(cl, 2500); 

    `)

      win.webContents.insertCSS(`
      body {
        display: block !important;
      }
    `)

      isDomReady = true
    })

    win.on('closed', function () {
      win = null
    })
  }
}

// VODPlayer.open('http://www.123kubo.com/vod-play-id-84855-sid-1-pid-10.html')

module.exports = VODPlayer