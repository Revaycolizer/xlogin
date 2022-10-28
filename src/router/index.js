import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/HelpView.vue'
import ErrorView from '../views/ErrorView.vue'
import HomeDash from '../views/HomeDash.vue'
import DashBoard from '../views/DashBoard.vue'
import AccountView from '../views/AccountView.vue'
import NotesView from '../views/NotesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/notes',
    name: 'notes',
    component: NotesView
  },
  {
    path: '/create',
    name: 'create',
    component: AccountView
  },
  {
    path: '/dash',
    name: 'dashboard',
    component: DashBoard
  },
  {
    path: '/home',
    name: 'dash',
    component: HomeDash
  },
  {
    path: '/:catchAll(.*)',
    name: 'error',
    component: ErrorView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
