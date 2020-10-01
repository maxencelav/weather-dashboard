<template>
  <b-jumbotron :header="'Détails de ' + this.$route.params.city">
    <Forecast :city="this.$route.params.city" ></Forecast>
  </b-jumbotron>
</template>

<script>
import Forecast from '@/components/Forecast.vue'

export default {
  components: {
    Forecast
  }
}
</script>

<style>
</style>
