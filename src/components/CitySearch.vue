<template>
  <b-input-group>
    <b-form-input
      v-model="inputCity"
      type="search"
      placeholder="Entrez une ville..."
      @keypress.enter="updateSearchStore"
      @blur="updateSearchStore"
    ></b-form-input>
    <b-input-group-append>
      <b-button block variant="primary" @click="updateSearchStore">
        Rechercher <b-icon-search class="ml-2"></b-icon-search>
      </b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: 'CitySearch',
  computed: {
    inputCity: {
      get () {
        return this.$store.getters.userCityInput
      },
      set (city) {
        this.tempCity = city
      }
    }
  },
  data () {
    return {
      tempCity: '',
      tempList: this.$store.getters.cityList
    }
  },
  methods: {
    updateSearchStore () {
      this.$store.commit('changeCity', this.tempCity)
      this.addToList()
    },
    addToList () {
      if (!this.tempList.includes(this.tempCity)) {
        if (this.tempList.length === 9) {
          this.tempList.shift()
        }
        this.tempList.push(this.tempCity.toLowerCase())
        this.$store.commit('addCityToList', this.tempList)
      }
      // if (this.tempList.length === 9) {
      // }
      // this.tempList = [...new Set(this.tempList)]
    }
  }
}
</script>

<style></style>
