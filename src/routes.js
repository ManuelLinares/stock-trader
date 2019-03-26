import Home from "./components/Home.vue";
import Portfolio from "./components/porfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";

export default [
  {
    path: '/',
    component: Home
  },
  {
    path: '/portfolio',
    component: Portfolio
  },
  {
    path: '/stocks',
    component: Stocks
  }
]