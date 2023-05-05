import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

import Dashboard from '@/components/Dashboard'
import DashboardHome from '@/pages/Home'
import Login from '@/pages/Login'

import store from './store'

import '@/assets/css/tailwind.css'


Vue.config.productionTip = false

Vue.use(Router)

const routes = [
  { path: '/', redirect: { name: 'Login' } },
  { path: '/dashboard', component: Dashboard, children: [
      { path: '/', redirect: { name: 'DashboardHome' } },
      { path: 'home', name: 'DashboardHome', component: DashboardHome }
    ]
  },
  { path: '/login', name: 'Login', component: Login },
]

const router = new Router({
  mode: 'history',
  routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
