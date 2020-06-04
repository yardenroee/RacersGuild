import Vue from 'vue'
import App from './App.vue'
import router from "./router.js";
import VueNumber from 'vue-number-animation'

Vue.use(VueNumber)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
