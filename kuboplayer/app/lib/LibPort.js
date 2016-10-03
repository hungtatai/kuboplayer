
const KuboSpider = require('./KuboSpider')

module.exports = {
  fetchVOD: (uri, cb) => {
    let ks = new KuboSpider()
    ks.fetchVOD(uri, cb)
  } 
}