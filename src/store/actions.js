import Vue from 'vue';

export const loadData = ({ commit }) => {
  Vue.http.get('data.json')
    .then(r => r.json())
    .then(d => {
      if (d) {
        const { stocks, funds, stockPortfolio } = d
        const portfolio = { funds, stockPortfolio }
        commit('SET_STOCKS', stocks)
        commit('SET_PORTFOLIO', portfolio)
      }
    })
}