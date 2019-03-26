<template>
  <div>
    <app-stock v-for="s in stocks" :key="s.id" :stock="s"></app-stock>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import appStock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters({
      stocks: "stockPortfolio"
    })
  },
  components: {
    appStock
  }
};
</script>
