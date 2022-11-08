import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HelpView from '../views/HelpView.vue'
import ErrorView from '../views/ErrorView.vue'
import HomeDash from '../views/HomeDash.vue'
import DashBoard from '../views/DashBoard.vue'
import AccountView from '../views/AccountView.vue'
import NotesView from '../views/NotesView.vue'
import AllNotes from '../views/AllNotes.vue'
import AllNotes2 from '../views/AllNotes2.vue'
import AllNotes3 from '../views/AllNotes3.vue'
import AllNotes4 from '../views/AllNotes4.vue'
import AllNotes5 from '../views/AllNotes5.vue'
import AllNotes6 from '../views/AllNotes6.vue'


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
    path: '/allnotes',
    name: 'allnotes',
    component: AllNotes
  },
  {
    path: '/allnotes2',
    name: 'allnotes2',
    component: AllNotes2
  },
  {
    path: '/allnotes3',
    name: 'allnotes3',
    component: AllNotes3
  },
  {
    path: '/allnotes4',
    name: 'allnotes4',
    component: AllNotes4
  },
  {
    path: '/allnotes5',
    name: 'allnotes5',
    component: AllNotes5
  },
  {
    path: '/allnotes6',
    name: 'allnotes6',
    component: AllNotes6
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
