import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userCityInput: '',
    cityList: [],
    dataWeather: []
  },
  getters: {
    userCityInput: state => state.userCityInput,
    cityList: state => state.cityList,
    getDataWeather: state => state.dataWeather
  },
  mutations: {
    changeCity (state, city) {
      state.userCityInput = city
    },
    addCityToList (state, cityList) {
      state.cityList = cityList
    },
    addData (state, data) {
      state.dataWeather.push(data)
    }
  }
})
