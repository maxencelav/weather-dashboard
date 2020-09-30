<template>
  <div class="weather">
    <b-card no-body>
      <div class="card-header">Votre recherche : <code>{{this.city}}</code></div>
      <div class="card-body">
        <b-row align-h="between">
          <b-col sm="1" class="mr-4">
                        <b-img :src='"http://openweathermap.org/img/wn/" + weatherData.weather[0].icon + "@2x.png"' alt="Icône de la météo"></b-img>

          </b-col>
          <b-col class="d-block">
            <h2>{{ weatherData.name }}</h2>
            <p>{{ weatherData.weather[0].description }}</p>
            <p class="card-text">
              <small class="text-muted">
                Récupéré le {{ weatherData.dt | filterTime }}
              </small>
            </p>
          </b-col>
          <b-col class="text-right d-block">
            <h2>{{ weatherData.main.temp }}°C</h2>
            <p style="font-style: italic">
              {{ weatherData.main.temp_max }}°C <b-icon icon="arrow-up-right"></b-icon> | {{ weatherData.main.temp_min }}°C <b-icon icon="arrow-down-right"></b-icon>
            </p>
          </b-col>
        </b-row>
      </div>
    </b-card>

   <!-- <p>{{ weatherData }}</p>-->
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
  props: {
    city: String
  },
  filters: {
    filterTime: function (value) {
      if (value) {
        return moment(Date(value)).locale('fr').format('LLLL')
      }
    }
  },
  asyncComputed: {
    weatherData: {
      get () {
        return axios
          .get(
            'http://api.openweathermap.org/data/2.5/weather?q=' +
              this.city +
              '&lang=fr&units=metric&appid=3ac7d8e51905929ee0a5e1c9695e280f'
          )
          .then((response) => response.data)
      },
      default () {
        return 'Chargement...'
      }
    }
  }
}
</script>

<style>
</style>
