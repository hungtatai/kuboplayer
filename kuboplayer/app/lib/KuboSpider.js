
'use strict'

const Crawler = require('crawler')

class KuboSpider {
  constructor () {
    this.crawler = new Crawler()
  }

  fetchVOD (uri, cb) {
    let m = uri.match(/http:\/\/www.123kubo.com\/vod-read-id-(\d*)[.]html/)
    let id = null
    if (m === null) {
      cb({error: 'URI is not allowed'})
      return
    } else {
      id = m[1]
    }

    this.crawler.queue({
      uri: uri,
      callback: (error, result, $) => {
        if (error) {
          Error('KuboSpider fetchVOD fail')
        } else {
          cb({
            id: id,
            updatedAt: new Date(),
            title: $('.vshow h2').text().trim(),
            img: $('.vpic img').attr('src'),
            flv: $('[id^=0_FLV] a').toArray().map((val, idx, arr) => {
              return {
                src: `http://www.123kubo.com/${$(val).attr('href')}`,
                title: $(val).text().trim()
              }
            })
          })
        }
      }
    })
  }
}

// var ks = new KuboSpider();
// ks.fetchVOD("http://www.123kubo.com/vod-read-id-61033.html", (result) => { console.log(result) })

module.exports = KuboSpider
