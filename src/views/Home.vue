<template>
  <b-container>
    <b-row class="vh-90" align-v="center">
      <b-col sm='12'><CitySearch></CitySearch> </b-col>
      <b-col ><CityDisplay city='Cergy'></CityDisplay></b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import CitySearch from '@/components/CitySearch.vue'
import CityDisplay from '@/components/CityDisplay.vue'

export default {
  name: 'Home',
  components: {
    CitySearch,
    CityDisplay
  }
}
</script>
