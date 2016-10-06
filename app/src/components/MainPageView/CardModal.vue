<!-- ref: https://github.com/vue-bulma/modal -->

<template>
  <transition
    :name="transition"
    mode="in-out"
    appear
    :appear-active-class="enterClass"
    :enter-active-class="enterClass"
    :leave-active-class="leaveClass"
  >
    <div :class="['modal', 'animated', visible ? 'is-active' : '']" v-if="visible">
      <div class="modal-background" @click="close"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">{{ title }}</p>
          <button class="delete" @click="close"></button>
        </header>
        <section class="modal-card-body" style="min-height: 50vh">
          <slot></slot>
        </section>
        <footer class="modal-card-foot">
          <a class="button is-primary" @click="b1Click">{{ b1 }}</a>
          <a class="button is-primary" @click="b2Click">{{ b2 }}</a>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    visible: Boolean,
    transition: {
      type: String,
      default: 'fade'
    },
    title: {
      type: String
    },
    b1: {
      type: String,
      default: 'b1Text'
    },
    b2: {
      type: String,
      default: 'b2Text'
    },
    b1Click: {
      type: Function
    },
    b2Click: {
      type: Function
    }
  },

  data () {
    return {
    }
  },

  methods: {
    close () {
      this.visible = false
    }
  },

  computed: {
    enterClass () {
      return `${this.transition}In`
    },

    leaveClass () {
      return `${this.transition}Out`
    }
  }
}
</script>