export const state = () => ({
  stats: {
    data: [],
    countries: []
  }
})

export const mutations = {
  SET_STATS(state, payload) {
    state.stats.data = payload
  }
}

export const actions = {
  setStats({ commit }, payload) {
    commit('SET_STATS', payload)
  }
}

export const getters = {
  allStats: state => {
    return state.stats.data
  }
}
