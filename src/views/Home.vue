<template>
  <div>
    <b-jumbotron
      header="Météo"
      lead="Récupérez les données météo du lieu que vous souhaitez, et affichez
            jusqu'à 9 lieux simultanément."
    >
    </b-jumbotron>
    <b-container fluid>
      <b-row class="justify-content-md-center">
        <b-col sm="6"><CitySearch></CitySearch></b-col>
        <b-col sm="auto" class="mt-4"
          ><CityDisplay :cityList="currentCityList"></CityDisplay
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
    },
    currentCityList: {
      get () {
        return this.$store.getters.cityList
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
  },

  asyncComputed: {

  }
}
</script>
