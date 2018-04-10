import Vue from 'vue'
import Vuex from 'vuex'
import Base from './base'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base: Base
  }
})
