<template>
  <div>
    <b-form-input
      v-model="inputCity"
      type='search'
      placeholder='Entrez une ville...'
    ></b-form-input>
    <input type="text" v-bind="this.inputCity">
    <div class='mt-2'>{{ this.$store.getters.userCityInput }}</div>
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
        this.$store.commit('changeCity', city)
      }
    }
  }
}
</script>

<style></style>
