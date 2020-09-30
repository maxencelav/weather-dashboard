import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userCityInput: ''
  },
  getters: {
    userCityInput: state => state.userCityInput
  },
  mutations: {
    changeCity (state, city) {
      state.userCityInput = city
    }
  }
})
