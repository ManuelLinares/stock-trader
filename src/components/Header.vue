<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <router-link class="navbar-brand" to="/">Stock Trader</router-link>
      </div>
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <router-link to="/portfolio" activeClass="active" tag="li">
            <a>Portfolio</a>
          </router-link>
          <router-link to="/stocks" activeClass="active" tag="li">
            <a>Stocks</a>
          </router-link>
        </ul>
        <strong class="navbar-text navbar-right">Funds: {{ funds | currency }}</strong>
        <ul class="nav navbar-nav navbar-right">
          <li style="cursor:pointer">
            <a @click="randomizeStocks">End Day</a>
          </li>
          <li class="dropdown" :class="{open:isMenuDown}" @click="isMenuDown = !isMenuDown">
            <a
              href="#"
              class="dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Save & Load
              <span class="caret"></span>
            </a>
            <ul class="dropdown-menu">
              <li>
                <a @click="saveData">Save Data</a>
              </li>
              <li>
                <a @click="loadData">Load Data</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["funds", "stockPortfolio", "stocks"])
  },
  methods: {
    ...mapActions(["randomizeStocks", "loadData"]),
    saveData() {
      const data = {
        funds: this.funds,
        stockPortfolio: this.stockPortfolio,
        stocks: this.stocks
      };
      this.$http.put("data.json", data);
    }
  },
  data() {
    return {
      isMenuDown: false
    };
  }
};
</script>
