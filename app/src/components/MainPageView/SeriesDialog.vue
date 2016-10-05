

<script>
  import CardModal from './CardModal'
  import LibPort from '../LibPort'

  export default {
    mixins: [CardModal],
    components: {},
    data () {
      return {
      }
    },
    methods: {
      play (url) {
        LibPort.playVOD(url)
      }
    },
    name: 'series-dialog'
  }
</script>
