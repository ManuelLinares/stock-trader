<template>
  <div>
    <app-stock v-for="s in stocks" :key="s.id" :stock="s"></app-stock>
  </div>
</template>

<script>
import appStock from "./Stock.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    appStock
  },
  computed: {
    ...mapGetters(["stocks"])
  }
};
</script>
