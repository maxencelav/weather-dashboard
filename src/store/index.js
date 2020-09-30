import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userCityInput: String
  },
  getters: {
    userCityInput: state => state.name
  },
  mutations: {
    changeCity (state, city) {
      state.userCityInput = city
    }
  }
})
