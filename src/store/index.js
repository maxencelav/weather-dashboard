import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex', // The key to store the state on in the storage provider.
  storage: window.localStorage // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
})

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
      if (state.dataWeather.length === 9) { // Check the limit of 9 city
        state.dataWeather.shift() // Delete the first one
      }
      state.dataWeather.push(data)
    }
  },
  plugins: [vuexLocalStorage.plugin]
})
