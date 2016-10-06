
const _ = require('lodash')

class VodStorage {
  /*
  Expected Raw VOD Structure:
  {
    id: "01234",
    updatedAt: new Date(),
    title: "xx",
    img: "http://..",
    flv: [
      {title: "s1", src: "http://.."},
      {title: "s2", src: "http://.."}
    ],
    seen: ["s1"]
  }
  */

  static get KEY () {
    return 'VOD_DATA'
  }

  static get all () {
    if (localStorage.getItem(VodStorage.KEY)) {
      return JSON.parse(localStorage.getItem(VodStorage.KEY))
    }
    return []
  }

  static find (vodId) {
    return _.find(VodStorage.all, {id: vodId})
  }

  static findIndex (vodId) {
    return _.findIndex(VodStorage.all, {id: vodId})
  }

  static remove (vodRaw) {
    let oriIdx = VodStorage.findIndex(vodRaw.id)
    if (oriIdx !== -1) {
      let all = VodStorage.all
      all.splice(oriIdx, 1)
      localStorage.setItem(VodStorage.KEY, JSON.stringify(all))
    }
  }

  static update (vodRaw) {
    let all = VodStorage.all
    let oriIdx = VodStorage.findIndex(vodRaw.id)
    if (oriIdx !== -1) {
      // replace vod
      all.splice(oriIdx, 1, vodRaw)
    } else {
      all.push(vodRaw)
    }
    localStorage.setItem(VodStorage.KEY, JSON.stringify(all))
  }

}

module.exports = VodStorage
