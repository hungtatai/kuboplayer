
'use strict';

const Crawler = require("crawler");




class KuboSpider {
  constructor() {
    this.crawler = new Crawler();
  }

  fetchVOD(uri, cb) {

    this.crawler.queue ({
      uri :uri,
      callback: (error, result, $) => {
        cb({
          title: $(".vshow h2").text().trim(),
          img: $(".vpic img").attr("src"),
          flv: $("#0_FLV58 a").toArray().map((val, idx, arr) => { 
            return {
              src: `http://www.123kubo.com/${$(val).attr("href")}`,
              title: $(val).text().trim()
            }
          })
        });
      }
    })

  }
}


var ks = new KuboSpider();
ks.fetchVOD("http://www.123kubo.com/vod-read-id-83804.html", (result) => {
  console.log(result)
})



// [a["href"] for a in bs.select("#0_FLV58 a")]