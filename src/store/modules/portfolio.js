const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  'BUY_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(el => el.id === stockId)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id: stockId,
        quantity
      })
    }
    state.funds -= stockPrice * quantity
  },
  'SELL_STOCK'(state, { stockId, quantity, stockPrice }) {
    const record = state.stocks.find(el => el.id === stockId)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1)
    }
    state.funds += stockPrice * quantity
  },
  'SET_PORTFOLIO'(state, pl) {
    state.funds = pl.funds
    state.stocks = pl.stockPortfolio ? pl.stockPortfolio : []
  }
}

const actions = {
  sellStock({ commit }, order) {
    commit('SELL_STOCK', order)
  }
}

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(s => {
      const record = getters.stocks.find(el => el.id === s.id)
      return {
        id: s.id,
        quantity: s.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds(state) {
    return state.funds
  }
}

export default {
  getters,
  actions,
  state,
  mutations
}