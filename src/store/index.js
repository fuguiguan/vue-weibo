import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    loading: false,
    user: {},
    login: false
  }
})

export default store
