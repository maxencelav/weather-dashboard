<template>
  <div>
    <b-table
      ref="table"
      :items="items"
      :fields="fields"
      sort-by="hour"
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
      for (let index = 0; index < 7; index++) {
        this.items.push({
          isActive: true,
          hour:
            moment(value.list[index].dt * 1000)
              .locale('fr')
              .format('HH') + 'h',
          day1: this.formatWeather(value, index),
          day2: this.formatWeather(value, index + 7),
          day3: this.formatWeather(value, +7 * 2),
          day4: this.formatWeather(value, +7 * 3),
          day5: this.formatWeather(value, +7 * 4)
        })
      }

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
