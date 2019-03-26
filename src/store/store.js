import Vuex from "vuex";
import Vue from "vue";
import stocks from "./modules/stock";
import portfolio from "./modules/portfolio";
import { loadData } from "./actions";

Vue.use(Vuex)

export default new Vuex.Store({
  actions: {
    loadData
  },
  modules: {
    stocks,
    portfolio
  }
})