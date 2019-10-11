/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 20:41:37
 * @LastEditTime: 2019-10-10 15:28:15
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios';
export default {
    state: {
        user: null
    },
    mutations: {
        login(state, {
            username,
            Authorization
        }) {
            state.user = {
                username,
                Authorization
            }
            localStorage.setItem("user", JSON.stringify({
                username,
                Authorization
            }));
        },
        logout(state) {
            state.user = null;
            localStorage.removeItem('user');
        }
    },
    actions: {
        async checkLogin(context, payload) {
            let user = localStorage.getItem('user');
            if (!user) {
                context.commit('logout');
            } else {
                user = JSON.parse(user);
                let {
                    data
                } = await axios.get("http://localhost:1907/verify", {
                    headers: {
                        Authorization: user.Authorization
                    }
                })
                if (data.code === 1) {
                    context.commit('login', user);
                } else {
                    context.commit('logout');
                    return 400
                }
            }
            return 200
        }
    }
}