/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-02 13:53:14
 * @LastEditTime: 2019-10-14 09:22:52
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import Index from '../components/index.vue'
import Used from '../components/used.vue'
import My from '../components/my.vue'
import Lost from '../components/lost.vue'
import Reg from '../components/reg.vue'
import Login from '../components/login.vue'
import store from '../store'
let router = new VueRouter({
    routes: [{
        name: 'index',
        path: '/index',
        component: Index
    }, {
        name: '/',
        redirect: '/index'
    }, {
        name: ' used',
        path: '/used',
        component: Used,
        meta: {
            requiresAuth: true
        }

    }, {
        name: 'my',
        path: '/my',
        component: My,
        meta: {
            requiresAuth: true
        }
    }, {
        name: 'lost',
        path: '/lost',
        component: Lost,
        meta: {
            requiresAuth: true
        }
    }, {
        name: 'reg',
        path: '/reg',
        component: Reg
    }, {
        name: 'login',
        path: '/login',
        component: Login
    }]
});
router.beforeEach(async function (to, from, next) {

    if (to.meta.requiresAuth) {
        let user = localStorage.getItem('user');
        if (user) {
            let res = await store.dispatch('checkLogin')
            if (res === 400) {
                router.push({
                    path: '/login',
                    query: {
                        targetUrl: to.fullPath
                    }
                })
            } else {
                next();
            }

        } else {
            router.push({
                path: '/login',
                query: {
                    targetUrl: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})
export default router;