/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 13:45:22
 * @LastEditTime: 2019-10-11 10:56:56
 * @LastEditors: Please set LastEditors
 */
import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import router from "./router";
import ElementUl from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import {
  Button
} from 'vant';


Vue.use(Button);
Vue.use(ElementUl);

import axios from "axios";
import store from "./store";
Vue.prototype.$axios = axios;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");