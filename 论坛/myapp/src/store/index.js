/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 20:28:06
 * @LastEditTime: 2019-10-10 16:46:01
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue';
import Vuex from 'vuex';
import common from './common'
Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        common
    }
})
export default store;