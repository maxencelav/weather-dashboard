<template>
  <div>
    <b-table
      ref="table"
      :items="items"
      :fields="fields"
      sort-by="hour"
      head-variant="light"
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
    formatWeather (source, index) {
      console.log(source.list[index])
      return (
        source.list[index].main.temp +
        '°C • ' +
        source.list[index].weather[0].description
      )
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
      this.items = [
        {
          isActive: true,
          hour:
            moment(value.list[0].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: this.formatWeather(value, 0),
          day2: this.formatWeather(value, 8),
          day3: this.formatWeather(value, 16),
          day4: this.formatWeather(value, 24),
          day5: this.formatWeather(value, 32)
        },
        {
          isActive: true,
          hour:
            moment(value.list[1].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: this.formatWeather(value, 1),
          day2: this.formatWeather(value, 9),
          day3: this.formatWeather(value, 17),
          day4: this.formatWeather(value, 25),
          day5: this.formatWeather(value, 33)
        },
        {
          isActive: true,
          hour:
            moment(value.list[2].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: this.formatWeather(value, 2),
          day2: this.formatWeather(value, 10),
          day3: this.formatWeather(value, 18),
          day4: this.formatWeather(value, 26),
          day5: this.formatWeather(value, 34)
        },
        {
          isActive: true,
          hour:
            moment(value.list[2].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: this.formatWeather(value, 3),
          day2: this.formatWeather(value, 11),
          day3: this.formatWeather(value, 19),
          day4: this.formatWeather(value, 27),
          day5: this.formatWeather(value, 35)
        },
        {
          isActive: true,
          hour:
            moment(value.list[3].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: this.formatWeather(value, 4),
          day2: this.formatWeather(value, 12),
          day3: this.formatWeather(value, 20),
          day4: this.formatWeather(value, 28),
          day5: this.formatWeather(value, 36)
        },
        {
          isActive: true,
          hour:
            moment(value.list[4].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: this.formatWeather(value, 5),
          day2: this.formatWeather(value, 13),
          day3: this.formatWeather(value, 21),
          day4: this.formatWeather(value, 29),
          day5: this.formatWeather(value, 37)
        },
        {
          isActive: true,
          hour:
            moment(value.list[5].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: this.formatWeather(value, 6),
          day2: this.formatWeather(value, 14),
          day3: this.formatWeather(value, 22),
          day4: this.formatWeather(value, 30),
          day5: this.formatWeather(value, 38)
        },
        {
          isActive: true,
          hour:
            moment(value.list[6].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: this.formatWeather(value, 7),
          day2: this.formatWeather(value, 15),
          day3: this.formatWeather(value, 23),
          day4: this.formatWeather(value, 31),
          day5: this.formatWeather(value, 39)
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
            'https://api.openweathermap.org/data/2.5/forecast?q=' +
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
