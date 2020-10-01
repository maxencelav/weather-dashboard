<template>
  <div class="weather">
     <b-card-group columns>
    <b-card no-body v-for="(city, index) in weatherData" :key="index">
      <div class="card-header">
        Votre recherche : <code>{{ city.name }}</code>
      </div>
      <div class="card-body">
        <b-row align-h="between">
          <b-col sm="auto">
            <b-img
              :src="'https://openweathermap.org/img/wn/' + city.weather[0].icon + '@2x.png'"
              alt="Icône de la météo"
            ></b-img>
          </b-col>
          <b-col class="d-block">
            <h2>
              {{ city.name }} <b-badge>{{ city.sys.country }}</b-badge>
            </h2>
            <p>
              {{ city.weather[0].description }} • Humidité :
              {{ city.main.humidity }}%
              <b-icon
                v-if="city.main.humidity <= 20"
                icon="droplet"
              ></b-icon>
              <b-icon
                v-else-if="city.main.humidity > 20 && city.main.humidity < 90"
                icon="droplet-half"
              ></b-icon>
              <b-icon
                v-else-if="city.main.humidity >= 90"
                icon="droplet-fill"
              ></b-icon>
            </p>
          </b-col>
          <b-col class="text-right d-block">
            <h2>{{ city.main.temp }}°C</h2>
            <p style="font-style: italic">
              {{ city.main.temp_max }}°C
              <b-icon icon="arrow-up-right"></b-icon> |
              {{ city.main.temp_min }}°C
              <b-icon icon="arrow-down-right"></b-icon>
            </p>
          </b-col>
        </b-row>
        <b-container>
          <p class="card-text">
            <b-row align-h="between" align-v="center">
              <small class="text-muted ml-3">
                Récupéré le {{ city.dt | filterTime }}
              </small>
              <div class="text-right">
                <b-button :to="'/details/' + city.name">Détails</b-button>
              </div>
            </b-row>
          </p>
        </b-container>
      </div>
    </b-card>
    </b-card-group>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    // city: String
    cityList: Array
  },
  filters: {
    filterTime: function (value) {
      if (value) {
        return moment(Date(value)).locale('fr').format('LLLL')
      }
    }
  },
  computed: {
    weatherData: {
      get () {
        return this.$store.state.dataWeather
      }
    }
  }
}
</script>

<style>
</style>
