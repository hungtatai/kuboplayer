<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  @import url('bulma/css/bulma.css');
  //@import url('main.css')


.vod-card {
  background: black;
}
.vod-card:hover {
  box-shadow: 0 0 4px;
  cursor: pointer;
}


  /*
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: center;
    background:
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 255, 1) 0%,
        rgba(229, 229, 229, .85) 100%
      );
    background-position: center;
    display: flex;
    font-family: Lato, Helvetica, sans-serif;
    justify-content: center;
    text-align: center;
  }
  */
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
