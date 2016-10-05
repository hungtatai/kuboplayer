


<template>
  
<div class="container">
  <div class="notification">
    <div class="columns" v-for="nCol in cards.length/4">
      
      <card
        v-for="card in cards | limitBy 4 nCol*4"
        :title="card.title"
        :img="card.img"
        @click="showSeriesDialog($index)"
      >
      </card>

    </div>
  </div>
</div>


<series-dialog  :visible.sync="activeDialog" :title="targetCard.title" v-if="targetCard">
<div class="container">
  <div class="">
    
    <div
      v-for="nCol in targetCard.flv.length/4" 
      class="columns">

      <div 
        v-for="flv in targetCard.flv | limitBy 4 nCol*4"
        class="column is-one-quarter">
        <div class="series-block">{{ flv.title }}</div>
      </div>

    </div>

  </div>
</div>
</series-dialog>


<style>
  .series-block {
    padding: 10px 20px;
    border-radius: 3px;
    /* border: 1px solid rgba(74,74,74,0.3); */
    background: #fafafa;
  }
  .series-block:hover {
    box-shadow: 0 0 2px;
    cursor: pointer;
  }
  .seen-series-block {
    background: #ff3860;
    color: white;
  }

  .vod-card{
    
  }
  .vod-card:hover {
    box-shadow: 0 0 4px;
    cursor: pointer;
  }
</style>

</template>


<script>
  import Card from './Card'
  import SeriesDialog from './SeriesDialog'
  const VodStorage = require('../VodStorage')

  export default {
    components: {
      Card,
      SeriesDialog
    },
    data () {
      return {
        // cards: [
        //   {img: 'http://www.123kubo.com/movieimg/2013-08/520ff824a403a.jpg', title: '超能力者齊木楠雄的災難1', flv: [{title: '1', src: 's'}, {title: '3', src: 's'}]},
        //   {img: 'http://www.123kubo.com/movieimg/2013-08/520ff824a403a.jpg', title: '超能力者齊木楠雄的災難2', flv: [{title: '2', src: 's'}]}
        // ],
        cards: VodStorage.all,
        activeDialog: false,
        dialogTitle: '',
        targetCard: null
      }
    },
    methods: {
      showSeriesDialog (idx) {
        console.log('showSeriesDialog ' + idx)
        this.targetCard = this.cards[idx]
        this.activeDialog = true
      }
    },
    events: {
      'add-card': function (card) {
        console.log('add-card')
        console.log(this)
        console.log(VodStorage)
        VodStorage.update(card)
        this.cards = VodStorage.all
      }
    },
    name: 'card-container'
  }
</script>
