import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Register from '@/components/register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta:{Auth:false, title:'Inicio' }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta:{Auth:false, title:'register' }
    },
    {
      path: '/login',
      name: 'Login',
      component: Register,
      meta:{Auth:false, title:'Login' }
    }
  ]
})
