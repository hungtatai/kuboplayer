


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


<series-dialog :visible.sync="activeDialog" :target-card.sync="targetCard"></series-dialog>


<style>

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
  import LibPort from '../LibPort'

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
        targetCard: null
      }
    },
    methods: {
      showSeriesDialog (idx) {
        console.log('showSeriesDialog ' + idx)
        this.targetCard = this.cards[idx]

        this.remoteUpdateCard()

        this.activeDialog = true
      },
      remoteUpdateCard () {
        if (new Date() - new Date(this.targetCard.updateAt) > 3600) {
          console.log('update series')
          LibPort.fetchVOD(`http://www.123kubo.com/vod-read-id-${this.targetCard.id}.html`, (result) => {
            console.log(result)
            if (typeof result['id'] === 'undefined') {
              // error
              console.log(result.error)
            } else {
              // this.$broadcast('add-card', result)
              this.updateCard(result)
              this.targetCard = result
            }
          })
        }
      },
      updateCard (card) {
        VodStorage.update(card)
        this.cards = VodStorage.all
      }
    },
    events: {
      'update-card': function (card) {
        console.log('update-card')
        this.updateCard(card)
      }
    },
    name: 'card-container'
  }
</script>
