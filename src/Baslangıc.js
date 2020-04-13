import Vue from "vue";
import Router from "vue-router";
import Header from "./Header-footer/starter/StarterHeader";
import Starter from "./views/Starter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "starter",
      components: {
        header: Header,
        default: Starter,
        footer: Footer
      }
    }
  ]
});
