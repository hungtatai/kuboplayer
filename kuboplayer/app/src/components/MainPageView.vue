

<style scoped>

</style>

<template>

<section class="hero is-dark">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Kubo Player
      </h1>
      <h2 class="subtitle">
        
      </h2>
    </div>
  </div>
</section>

<br />

<div class="container">
  <div class="notification">
    <p class="control has-addons">
      <input 
        v-model="fetchURL"
        @keyup.enter="search"
        class="input is-expanded is-medium" 
        type="text" 
        placeholder="http://www.123kubo.com/vod-read-id-xxxxx.html">
      <button 
        @click="search"
        class="button is-medium is-primary">
        加入清單
      </button>
    </p>
  </div>
</div>

<div class="container">
  <div class="notification">
    <div class="columns">
      <div class="column">
        <p class="notification is-info">1 column</p>
      </div>
      <div class="column">
        <p class="notification is-danger">2 column</p>
      </div>
      <div class="column">
        <p class="notification is-warning">3 column</p>
      </div>
      <div class="column">
        <p class="notification is-success">4 column</p>
      </div>
    </div>
  </div>
</div>


<card-container></card-container>




</template>

<script>
  import electron from 'electron'
  import CardContainer from './MainPageView/CardContainer'

  export default {
    components: {
      CardContainer
    },
    data () {
      return {
        fetchURL: ''
      }
    },
    methods: {
      search: function () {
        console.log(this.fetchURL)
        this.$broadcast('add-card', {title: this.fetchURL})
        // shell.openExternal('http://google.com')
        // const BrowserWindow = electron.remote.BrowserWindow
        // console.log(electron)
        // var w = new BrowserWindow({width: 800, height: 600})
        // w.loadURL('http://google.com')
        console.log(__dirname)
        // const KuboSpider = electron.remote.TestFunc
        // let spider = KuboSpider()
        electron.remote.getCurrentWindow().fetchVOD('http://www.123kubo.com/vod-read-id-61033.html', (result) => { console.log(result) })

        this.fetchURL = ''
      }
    },
    name: 'main-page'
  }
</script>
