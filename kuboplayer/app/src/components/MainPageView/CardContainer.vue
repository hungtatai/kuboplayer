


<template>
  
<div class="container">
  <div class="notification">
    <div class="columns" v-for="nCol in cards.length/4">
      
      <card v-for="card in cards | limitBy 4 nCol*4"
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
          {img: 'http://www.123kubo.com/movieimg/2013-08/520ff824a403a.jpg', title: '超能力者齊木楠雄的災難1'},
          {img: 'http://www.123kubo.com/movieimg/2013-08/520ff824a403a.jpg', title: '超能力者齊木楠雄的災難2'},
          {img: 'http://www.123kubo.com/movieimg/2013-08/520ff824a403a.jpg', title: '超能力者齊木楠雄的災難3'},
          {img: 'http://www.123kubo.com/movieimg/2013-08/520ff824a403a.jpg', title: '超能力者齊木楠雄的災難4'},
          {img: 'http://www.123kubo.com/movieimg/2013-08/520ff824a403a.jpg', title: '超能力者齊木楠雄的災難5'},
          {img: 'http://www.123kubo.com/movieimg/2013-08/520ff824a403a.jpg', title: '超能力者齊木楠雄的災難6'},
          {img: 'http://www.123kubo.com/movieimg/2013-08/520ff824a403a.jpg', title: '超能力者齊木楠雄的災難7'},
          {img: 'http://www.123kubo.com/movieimg/2013-08/520ff824a403a.jpg', title: '超能力者齊木楠雄的災難8'},
          {img: 'http://www.123kubo.com/movieimg/2013-08/520ff824a403a.jpg', title: '超能力者齊木楠雄的災難9'}
        ]
      }
    },
    events: {
      'add-card': (card) => {
        this.cards.push(card)
      }
    },
    name: 'card-container'
  }
</script>
