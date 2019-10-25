import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// console.log(Math);
Math.sum = (a, b) => {
  return a+b
}
Math.minus = (a, b) => {
  return a-b
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
