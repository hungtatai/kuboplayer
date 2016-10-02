
<template>

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

</template>


<script>
  export default {
    components: {
    },
    data () {
      return {
        fetchURL: ''
      }
    },
    methods: {
      search: function () {
        console.log(this.fetchURL)
        this.fetchURL = ''
      }
    },
    name: 'search-container'
  }
</script>
