
<template>

<card-modal 
  :visible.sync="visible" 
  :title="targetCard.title" 
  v-if="targetCard"
  :b1="resetSeenText"
  :b2="deleteCardText"
  :b1-click="resetSeenClick"
  :b2-click="deleteCardClick"
  >

<div class="container">
  <div class="">
    
    <div
      v-for="nCol in targetCard.flv.length/4" 
      class="columns">

      <div 
        @click="play(flv)"
        v-for="flv in targetCard.flv | limitBy 4 nCol*4"
        class="column is-one-quarter">
        <div class="series-block" :class="{'seen-series-block': isSeen(targetCard, flv.title)}">{{ flv.title }}</div>
      </div>

    </div>

  </div>
</div>

</card-modal>


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
</style>

</template>

<script>
  import CardModal from './CardModal'
  import LibPort from '../LibPort'

  export default {
    components: {
      CardModal
    },
    props: {
      targetCard: {},
      visible: Boolean
    },
    data () {
      return {
        resetSeenText: '重置觀看記錄',
        deleteCardText: '刪除此影集'
      }
    },
    methods: {
      play (flv) {
        LibPort.playVOD(flv.src)
        this.targetCard.seen.push(flv.title)
        this.$dispatch('update-card', this.targetCard)
      },
      isSeen (card, seriesTitle) {
        return card.seen.indexOf(seriesTitle) !== -1
      },
      resetSeenClick () {
        console.log('resetSeenClick')
        this.targetCard.seen = []
        this.$dispatch('update-card', this.targetCard)
      },
      deleteCardClick () {
        console.log('deleteCardClick')
        this.visible = false
        this.$dispatch('remove-card', this.targetCard)
      }
    },
    name: 'series-dialog'
  }
</script>
