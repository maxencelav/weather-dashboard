<template>
  <div>
    <b-table
      small
      ref="table"
      :items="items"
      :fields="fields"
      head-variant="light"
      class="mt-5"
    ></b-table>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'

export default {
  props: {
    city: String
  },
  data () {
    return {
      fields: [
        {
          key: 'time',
          label: 'Heure'
        },
        {
          key: 'temperature',
          label: 'Température'
        },
        {
          key: 'highlow',
          label: 'Extrêmes'
        },
        {
          key: 'status',
          label: 'État'
        },
        {
          key: 'humidity',
          label: 'Humidité'
        }
      ],
      items: []
    }
  },
  methods: {},
  filters: {},
  asyncComputed: {
    weatherData: {
      get () {
        return axios
          .get(
            'https://api.openweathermap.org/data/2.5/forecast?q=' +
              this.city +
              '&lang=fr&units=metric&appid=3ac7d8e51905929ee0a5e1c9695e280f'
          )
          .then((response) => {
            const result = response.data.list
            result.forEach((item) =>
              this.items.push({
                time: moment(item.dt_txt).locale('fr').format('dddd DD MMM à HH') + 'h',
                humidity: item.main.humidity + '%',
                highlow: item.main.temp_min + ' - ' + item.main.temp_max,
                temperature: item.main.temp + '°C',
                status: item.weather[0].description
              })
            )
            this.cityForecast.push(response.data.list)
          })
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
