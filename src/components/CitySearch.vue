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
