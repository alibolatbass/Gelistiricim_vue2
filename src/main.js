
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import PluginsA from "./plugins/PluginsA";
import './Kayıtol'

Vue.config.productionTip = false;
Vue.use(PluginsA );
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
