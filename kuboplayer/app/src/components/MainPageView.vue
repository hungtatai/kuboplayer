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

<search-container></search-container>


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
  import SearchContainer from './MainPageView/SearchContainer'
  export default {
    components: {
      CardContainer,
      SearchContainer
    },
    name: 'main-page'
  }
</script>
