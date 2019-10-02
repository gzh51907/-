/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 13:45:22
 * @LastEditTime: 2019-10-02 14:06:23
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from './router'
import ElementUl from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUl)
import axios from 'axios'
Vue.prototype.$axios = axios
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')