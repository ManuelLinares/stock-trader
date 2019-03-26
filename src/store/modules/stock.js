import stokcsData from "../../data/stocks";

const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS'(state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS'(state) {
    state.stocks.forEach(s => {
      s.price = Math.round(s.price * (Math.random() + 0.5))
    });
  }
}

const actions = {
  buyStock({ commit }, order) {
    commit('BUY_STOCK', order)
  },
  initStocks({ commit }) {
    commit('SET_STOCKS', stokcsData)
  },
  randomizeStocks({ commit }) {
    commit('RND_STOCKS')
  }
}

const getters = {
  stocks(state) {
    return state.stocks
  }
}

export default {
  getters,
  actions,
  mutations,
  state
}