
const KuboSpider = require('./KuboSpider')
const VODPlayer = require('./VODPlayer')

module.exports = {
  fetchVOD: (uri, cb) => {
    let ks = new KuboSpider()
    ks.fetchVOD(uri, cb)
  },
  playVOD: (uri) => {
    console.log('playVOD')
    VODPlayer.open(uri)
  }
}
