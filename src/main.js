import Vue from "vue";
import App from "./App.vue";
//import BootstrapVue from "bootstrap-vue";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap-vue/dist/bootstrap-vue.css";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
require('./styles/myStyles.scss')

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
