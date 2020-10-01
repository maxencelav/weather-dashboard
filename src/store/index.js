import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userCityInput: '',
    dataWeather: {}
  },
  getters: {
    userCityInput: state => state.userCityInput,
    getDataWeather: state => state.dataWeather
  },
  mutations: {
    changeCity (state, city) {
      state.userCityInput = city
    },
    addData (state, data) {
      state.dataWeather = data
    }
  }
})
