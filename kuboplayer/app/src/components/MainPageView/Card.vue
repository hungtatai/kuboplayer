<style scoped>

</style>

<template>
  
<div class="column is-one-quarter">
  <div class="card is-fullwidth vod-card">
    <figure class="image is-1by1">
      <img :src="img" alt="">
    </figure>
    <div class="card-content">
      <div class="content is-medium"">
        <strong>{{ title }}</strong>
      </div>
    </div>
  </div>
</div>

</template>


<script>
  export default {
    props: ['title', 'img'],
    data () {
      return {
      }
    }
  }
</script>
