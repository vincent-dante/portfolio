import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Education from '../views/Education.vue'
import Projects from '../views/Projects.vue'
import Experience from '../views/Experience.vue'
import ProjectsWebDesign from '../views/ProjectsWebDesign.vue'
import ProjectsGraphicDesign from '../views/ProjectsGraphicDesign.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
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
    component: Projects,
    children: [
      {
        path: '',
        component: ProjectsWebDesign
      },
      {
        path: 'graphicdesign',
        component: ProjectsGraphicDesign
      }      
    ]
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
