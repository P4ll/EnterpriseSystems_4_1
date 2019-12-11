import Vue from 'vue'
import App from './App.vue'
import './quasar'
import './registerServiceWorker'

import Vuex from 'vuex'
import state from './store/state.js'
import * as getters from './store/getters.js'
import * as mutations from './store/mutations.js'
import * as actions from './store/actions'

import VueRouter from 'vue-router'
import VueInternationalization from 'vue-i18n'
import createPersistedState from 'vuex-persistedstate'

import Graph from './pages/Graph.vue'
import Auth from './pages/Authorization.vue'
import Reg from './pages/Registration.vue'
import Profile from './pages/Profile.vue'

import ru from './i18n/ru.js'
import en from './i18n/en.js'

Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/auth' },
    { path: '/graph', component: Graph },
    { path: '/auth', component: Auth },
    { path: '/reg', component: Reg },
    { path: '/profile', component: Profile }
  ]
})

Vue.use(VueInternationalization)
Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState()]
})

const messages = {
  ru,
  en
}

const i18n = new VueInternationalization({
  locale: store.getters.getLang,
  messages
})

new Vue({
  i18n,
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#app')
