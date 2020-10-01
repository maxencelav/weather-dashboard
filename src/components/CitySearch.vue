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
      if (!this.tempList.includes(this.tempCity.toLowerCase())) { // Check if the city is already in the list
        if (this.tempList.length === 9) { // Check the limit of 9 city
          this.tempList.shift() // Delete the first one
        }
        this.tempList.push(this.tempCity.toLowerCase()) // Add the new city
        this.$store.commit('addCityToList', this.tempList) // Send to the store
      }
    }
  }
}
</script>

<style></style>
