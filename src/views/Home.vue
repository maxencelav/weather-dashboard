<template>
  <div class="home">
    <CitySearch></CitySearch>
    <CityDisplay city="Cergy"></CityDisplay>

  </div>
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
