<template>
  <div>
    <b-table
      small
      ref="table"
      :items="items"
      :fields="fields"
      head-variant="light"
      class="mt-5 align-middle"
      sticky-header="500px"
    >
      <template v-slot:cell(highlow)="data">
        {{ data.value.high }} <b-icon icon="arrow-up-right"></b-icon> |
        {{ data.value.low }} <b-icon icon="arrow-down-right"></b-icon>
      </template>

      <template v-slot:cell(status)="data">
        {{ data.value.currentStatus }}
        <b-img
          height="32px"
          :src="'https://openweathermap.org/img/wn/' + data.value.icon + '.png'"
          alt="Icône de la météo"
        ></b-img>
      </template>

      <template v-slot:cell(humidity)="data">
        {{ data.value.currentHumidity + '%'}}
        <b-icon
          v-if="data.value.currentHumidity <= 20"
          icon="droplet"
        ></b-icon>
        <b-icon
          v-else-if="data.value.currentHumidity > 20 && data.value.currentHumidity < 90"
          icon="droplet-half"
        ></b-icon>
        <b-icon
          v-else-if="data.value.currentHumidity >= 90"
          icon="droplet-fill"
        ></b-icon>
      </template>
    </b-table>
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
          label: 'Minimale & Maximale'
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
                time:
                  moment(item.dt_txt).locale('fr').format('dddd DD MMM à HH') +
                  'h',
                humidity: { currentHumidity: item.main.humidity },
                highlow: {
                  high: item.main.temp_max + '°C',
                  low: item.main.temp_min + '°C'
                },
                temperature: item.main.temp + '°C',
                status: {
                  currentStatus: item.weather[0].description,
                  icon: item.weather[0].icon
                }
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
.table > tbody > tr > td {
  vertical-align: middle;
}
</style>
