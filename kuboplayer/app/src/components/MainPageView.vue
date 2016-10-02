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
      <input class="input is-expanded is-medium" type="text" placeholder="http://www.123kubo.com/vod-read-id-xxxxx.html">
      <a class="button is-medium is-primary">
        加入清單
      </a>
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
  import CardContainer from './MainPageView/CardContainer'
  export default {
    components: {
      CardContainer
    },
    name: 'main-page'
  }
</script>
