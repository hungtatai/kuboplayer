import Vue from 'vue'

export default {
  '/ll': {
    component: Vue.component('landing-page', require('./components/LandingPageView')),
    name: 'landing-page'
  },
  '/': {
    component: Vue.component('main-page', require('./components/MainPageView')),
    name: 'main-page'
  }
}
