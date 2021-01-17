import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // result 用于存储读入的数据
    result:null,
    symbol:""
  },
  mutations: {
    handleResult(state, data) {
      state.result = data;
    }
  },
  actions: {
  },
  modules: {
  }
})
