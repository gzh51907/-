/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 13:53:14
 * @LastEditTime: 2019-10-02 14:42:19
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Index from '../components/index.vue'
let router = new VueRouter({
    routes: [{
        name: 'index',
        path: '/index',
        component: Index
    }, {
        path: '/',
        redirect: '/index'
    }]
})
export default router;