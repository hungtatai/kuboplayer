<style>
  /*@import url(https://fonts.googleapis.com/css?family=Lato:300);*/
  @import url('bulma/css/bulma.css');
  
</style>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store
  }
</script>
