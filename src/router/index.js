import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/home/index'
import Search from '../pages/search/index'
import Message from '../pages/message/index'
import Mine from '../pages/mine/index'
import Login from '../components/login/Login'
import store from '../store/index'
Vue.use(VueRouter)

const login = store.state.login

const routes  = [
  {
    path: '/',
    redirect: login ? '/home' : 'login'
  },
  {
    path: '/home',
    component: Home,
    childrend: [
      {
        path: '/login',
        component: Login
      }
    ]
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/message',
    component: Message
  },
  {
    path: '/mine',
    component: Mine
  },
  {
    path: '/login',
    component: Login
  }
]

export default new VueRouter({
  routes
})
