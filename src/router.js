import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/historia',
      name: 'historia',
      component: () => import('./views/Historia.vue')
    },
    {
      path: '/introducao',
      name: 'introducao',
      component: () => import('./views/Introducao.vue')
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: () => import('./views/Vuex.vue')
    },
    {
      path: '/organizacao',
      name: 'organizacao',
      component: () => import('./views/Organizacao.vue')
    },
    {
      path: '/componentes',
      name: 'componentes',
      component: () => import('./views/Componentes.vue')
    },
    {
      path: '/Router',
      name: 'router',
      component: () => import('./views/Router.vue')
    }
  ]
})
