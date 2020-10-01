import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userCityInput: '',
    cityList: []
  },
  getters: {
    userCityInput: state => state.userCityInput,
    cityList: state => state.cityList
  },
  mutations: {
    changeCity (state, city) {
      state.userCityInput = city
    },
    addCityToList (state, cityList) {
      state.cityList = cityList
    }
  }
})
