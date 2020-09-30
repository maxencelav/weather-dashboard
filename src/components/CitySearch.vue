<template>
  <div>
    <b-form-input
      v-model='inputCity'
      type='search'
      placeholder='Entrez une ville...'
    ></b-form-input>
    <b-button @click="updateSearchStore"> <b-icon-search></b-icon-search></b-button>
  </div>
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
      tempCity: ''
    }
  },
  methods: {
    updateSearchStore () {
      this.$store.commit('changeCity', this.tempCity)
    }
  }
}
</script>

<style></style>
