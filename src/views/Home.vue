<template>
  <b-container fluid="md">
    <b-row class='vh-100 align-content-center'>
      <b-col sm='12'><CitySearch></CitySearch></b-col>
      <b-col><CityDisplay :city='currentCity'></CityDisplay></b-col>
      <b-col>{{ currentCity }}</b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import CitySearch from '@/components/CitySearch.vue'
import CityDisplay from '@/components/CityDisplay.vue'

export default {
  name: 'Home',
  computed: {
    currentCity: {
      get () {
        return this.$store.getters.userCityInput
      }
    }
  },
  data () {
    return {
      // city gets automatically loaded ONLY on page load
      // currentCity: this.$store.getters.userCityInput
    }
  },
  components: {
    CitySearch,
    CityDisplay
  }
}
</script>
