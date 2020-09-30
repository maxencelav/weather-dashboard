<template>
  <div class="weather">
    <b-card>
      <b-row align-h="between">
        <b-col>
          <h2>{{weatherData.name}}</h2>
        </b-col>
        <b-col>
          <h2 class="text-right">
            {{weatherData.name}}
          </h2>
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

export default {
  props: {
    city: String
  },
  asyncComputed: {
    weatherData: {
      get () {
        return axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=3ac7d8e51905929ee0a5e1c9695e280f')
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
