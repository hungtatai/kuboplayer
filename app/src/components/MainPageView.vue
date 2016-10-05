

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

<card-container></card-container>

</template>

<script>
  // import electron from 'electron'
  import CardContainer from './MainPageView/CardContainer'
  import LibPort from './LibPort'

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
        if (this.fetchURL.trim() === '') {
          return
        }

        LibPort.fetchVOD(this.fetchURL, (result) => {
          console.log(result)
          if (typeof result['id'] === 'undefined') {
            // error
            console.log(result.error)
          } else {
            this.$broadcast('add-card', result)
          }
        })

        // LibPort.playVOD('http://www.123kubo.com/vod-play-id-86473-sid-2-pid-1.html')

        this.fetchURL = ''
      }
    },
    name: 'main-page'
  }
</script>
