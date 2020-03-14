<template>
  <div class="container">
    <div class="title">Covid19 Results</div>
    <div>
      <a-select showSearch placeholder="Select country" @change="searchCountry">
        <a-select-option
          v-for="(stat, i) in stats"
          :value="stat.Country_Other"
          :key="i"
          >{{ stat.Country_Other }}</a-select-option
        >
      </a-select>
    </div>
    <div v-if="selectedResult" class="result">
      <div>
        <strong>{{ selectedResult[0].Country_Other }}</strong>
      </div>
      <div>Total Deaths: {{ selectedResult[0].TotalCases }}</div>
      <div>New Cases: {{ selectedResult[0].NewCases }}</div>
      <div>Deaths: {{ selectedResult[0].TotalDeaths }}</div>
      <div>New Deaths: {{ selectedResult[0].NewDeaths }}</div>
      <div>Recoverd: {{ selectedResult[0].TotalRecovered }}</div>
      <div>Active Cases: {{ selectedResult[0].ActiveCases }}</div>
      <div>Serious: {{ selectedResult[0].Serious_Critical }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      selected: null,
      selectedResult: null
    }
  },
  async asyncData({ store }) {
    const { data } = await axios.get('https://covid19-api-statistics.now.sh/')
    await store.dispatch('stats/setStats', data)
  },
  computed: {
    ...mapGetters({
      stats: 'stats/allStats'
    })
  },
  methods: {
    searchCountry(value) {
      const foundCountry = this.stats.filter(
        result => result.Country_Other == value
      )
      this.selectedResult = foundCountry
    }
  }
}
</script>

<style>
.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 10vh;
  flex-direction: column;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}
.ant-select {
  width: 100% !important;
  max-width: 400px;
}
.result {
  margin-top: 10vh;
}
strong {
  font-weight: bold;
}
.title {
  font-size: 2.5rem;
  margin-bottom: 10vh;
}
</style>
