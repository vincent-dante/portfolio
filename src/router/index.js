import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Education from '../views/Education.vue'
import Projects from '../views/Projects.vue'
import Experience from '../views/Experience.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/experience',
    name: 'Experience',
    component: Experience
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
