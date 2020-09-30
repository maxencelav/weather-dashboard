<template>
  <div>
    <b-form-input
      v-model="inputCity"
      type="search"
      placeholder="Entrez une ville..."
    ></b-form-input>
    <div class="mt-2">Value: {{ inputCity }}</div>
  </div>
</template>

<script>
export default {
  name: 'CitySearch',
  data () {
    return {
      inputCity: 'Cergy'
    }
  }
}
</script>

<style>
</style>
