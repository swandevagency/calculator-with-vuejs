import { createRouter, createWebHashHistory } from 'vue-router'

import Calculater from '../views/Calculater'
import home from '../views/home'
const routes = [
  {
    path: '/Calculater',
    name: 'Calculater',
    component: Calculater
  },
  {
    path: '/home',
    name: 'home',
    component: home
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
