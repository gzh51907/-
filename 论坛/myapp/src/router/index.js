/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 13:53:14
 * @LastEditTime: 2019-10-04 13:43:55
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Index from '../components/index.vue'
import Used from '../components/used.vue'
import My from '../components/my.vue'
import Lost from '../components/lost.vue'
let router = new VueRouter({
    routes: [{
        name: 'index',
        path: '/index',
        component: Index
    }, {
        path: '/',
        redirect: '/index'
    }, {
        name: ' used',
        path: '/used',
        component: Used
    }, {
        name: 'my',
        path: '/my',
        component: My
    }, {
        name: 'lost',
        path: '/lost',
        component: Lost
    }]
})
export default router;