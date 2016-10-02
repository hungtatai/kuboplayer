


<template>
  
<div class="container">
  <div class="notification">
    <div class="columns" v-for="nCol in cards.length/4">
      
      <card
        v-for="card in cards | limitBy 4 nCol*4"
        :title="card.title"
        :img="card.img"
      >
      </card>

    </div>
  </div>
</div>

</template>


<script>
  import Card from './Card'
  export default {
    components: {
      Card
    },
    data () {
      return {
        cards: [
          {img: 'http://www.123kubo.com/movieimg/2013-08/520ff824a403a.jpg', title: '超能力者齊木楠雄的災難1'}
        ]
      }
    },
    methods: {
    },
    events: {
      'add-card': function (card) {
        this.cards.push(card)
      }
    },
    name: 'card-container'
  }
</script>
