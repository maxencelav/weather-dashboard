<template>
  <div>
    <b-table
      ref="table"
      striped
      hover
      :items="items"
      :fields="fields"
      sort-by="hour"
    ></b-table>
    <b-button @click="fillTable(weatherData)">Today</b-button>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'

export default {
  data () {
    return {
      city: 'Londres',
      fields: [
        {
          key: 'hour',
          label: 'Heure',
          sortable: true
        },
        {
          key: 'day1',
          label: moment().locale('fr').format('Do MMMM')
        },
        {
          key: 'day2',
          label: moment().locale('fr').add(1, 'd').format('Do MMMM')
        },
        {
          key: 'day3',
          label: moment().locale('fr').add(2, 'd').format('Do MMMM')
        },
        {
          key: 'day4',
          label: moment().locale('fr').add(3, 'd').format('Do MMMM')
        },
        {
          key: 'day5',
          label: moment().locale('fr').add(4, 'd').format('Do MMMM')
        }
      ],
      items: []
    }
  },
  methods: {
    fillTable (dataWeather) {

    }
  },
  filters: {
    filterHour: function (value) {
      if (value) {
        return moment(Date(value)).locale('fr').format('HH') + 'h'
      }
    }
  },
  watch: {
    weatherData: function (value, oldValue) {
      console.log(value.list[1].dt)
      console.log(
        moment(Date(value.list[1].dt)).locale('fr').format('LLLL')
      )

      this.items = [
        {
          isActive: true,
          hour:
            moment(value.list[0].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: value.list[0].main.temp,
          day2: value.list[8].main.temp,
          day3: value.list[16].main.temp,
          day4: value.list[24].main.temp,
          day5: value.list[32].main.temp
        },
        {
          isActive: true,
          hour:
            moment(value.list[1].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: value.list[1].main.temp,
          day2: value.list[9].main.temp,
          day3: value.list[17].main.temp,
          day4: value.list[25].main.temp,
          day5: value.list[33].main.temp
        },
        {
          isActive: true,
          hour:
            moment(value.list[2].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: value.list[2].main.temp,
          day2: value.list[10].main.temp,
          day3: value.list[18].main.temp,
          day4: value.list[26].main.temp,
          day5: value.list[34].main.temp
        },
        {
          isActive: true,
          hour:
            moment(value.list[3].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: value.list[3].main.temp,
          day2: value.list[11].main.temp,
          day3: value.list[19].main.temp,
          day4: value.list[27].main.temp,
          day5: value.list[35].main.temp
        },
        {
          isActive: true,
          hour:
            moment(value.list[4].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: value.list[4].main.temp,
          day2: value.list[12].main.temp,
          day3: value.list[20].main.temp,
          day4: value.list[28].main.temp,
          day5: value.list[36].main.temp
        },
        {
          isActive: true,
          hour:
            moment(value.list[5].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: value.list[5].main.temp,
          day2: value.list[13].main.temp,
          day3: value.list[21].main.temp,
          day4: value.list[29].main.temp,
          day5: value.list[37].main.temp
        },
        {
          isActive: true,
          hour:
            moment(value.list[6].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: value.list[6].main.temp,
          day2: value.list[14].main.temp,
          day3: value.list[22].main.temp,
          day4: value.list[30].main.temp,
          day5: value.list[38].main.temp
        },
        {
          isActive: true,
          hour:
            moment(value.list[7].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: value.list[7].main.temp,
          day2: value.list[15].main.temp,
          day3: value.list[23].main.temp,
          day4: value.list[31].main.temp,
          day5: value.list[39].main.temp
        }
      ]
      this.$refs.table.refresh()
    }
  },
  asyncComputed: {
    weatherData: {
      get () {
        return axios
          .get(
            'https://api.openweathermap.org/data/2.5/forecast?q=London&lang=fr&units=metric&appid=3ac7d8e51905929ee0a5e1c9695e280f'
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
