<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-md-12">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import appHeader from "./components/Header.vue";

export default {
  name: "app",
  components: {
    appHeader
  },
  created() {
    this.$store.dispatch("initStocks");
  }
};
</script>

<style>
body {
  padding: 30px;
}
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}
.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}
@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slide-out {
  to {
    opacity: 0;
    transform: translateY(-30px);
  }
  from {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
