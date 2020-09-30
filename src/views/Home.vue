<template>
  <div>
    <b-jumbotron
      header="Météo"
      lead="Récupérez les données météo du lieu que vous souhaitez, et affichez
            jusqu'à 10 lieux simultanément."
    >
    </b-jumbotron>
    <b-container fluid="md">
      <b-row class="align-content-center">
        <b-col sm="12"><CitySearch></CitySearch></b-col>
        <b-col sm="12" class="mt-4"
          ><CityDisplay :city="currentCity"></CityDisplay
        ></b-col>
      </b-row>
    </b-container>
  </div>
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
