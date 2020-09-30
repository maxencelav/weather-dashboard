<template>
  <div class="weather">
    <b-card>
      <b-row align-h="between">
        <b-col class="d-block">
          <h2>{{weatherData.name}}</h2>
          <p>
            {{weatherData.weather[0].main}} | {{weatherData.weather[0].description}}
          </p>
          <p>
            {{ weatherData.dt | filterTime }}
          </p>
        </b-col>
        <b-col class="text-right d-block">
          <h2>
            {{weatherData.main.temp}}°C
          </h2>
          <p style="font-style: italic;">
            {{ weatherData.main.temp_max }}°C<b-icon icon="arrow-up-right"></b-icon> | {{ weatherData.main.temp_min }}°C<b-icon icon="arrow-down-right"></b-icon>
          </p>
        </b-col>
      </b-row>
      <b-card-text>
        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
        content.
      </b-card-text>
      <b-card-text>A second paragraph of text in the card.</b-card-text>
      <a href="#" class="card-link">Card link</a>
      <b-link href="#" class="card-link">Another link</b-link>
    </b-card>

    <b-button href="#" variant="primary">Go somewhere</b-button>
    <p>{{ weatherData }}</p>
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
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&units=metric&appid=3ac7d8e51905929ee0a5e1c9695e280f')
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
