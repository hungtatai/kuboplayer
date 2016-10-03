
'use strict'

const path = require('path')
module.paths.push(path.resolve('node_modules'))
module.paths.push(path.resolve('../node_modules'))

const requests = require('requests')
const Crawler = require('crawler')

class KuboSpider {
  constructor () {
    this.crawler = new Crawler()
  }

  fetchVOD (uri, cb) {
    this.crawler.queue({
      uri: uri,
      callback: (error, result, $) => {
        if (error) {
          Error('KuboSpider fetchVOD fail')
        } else {
          cb({
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
