import Vue from 'vue'
import Vuex from 'vuex'
import dashboard from './dashboard'
import taskList from './taskList'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    dashboard,
    taskList
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
