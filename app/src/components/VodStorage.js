
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

  static fetch (vodId) {
    return _.find(VodStorage.all, {id: vodId})
  }

  static update (vodRaw) {
    let all = VodStorage.all
    let oriIdx = _.findIndex(all, {id: vodRaw.id})
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
