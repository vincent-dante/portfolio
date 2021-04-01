import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Education from '../views/Education.vue'
import Projects from '../views/Projects.vue'
import Experience from '../views/Experience.vue'
import ProjectsWebDesign from '../views/ProjectsWebDesign.vue'
import ProjectsGraphicDesign from '../views/ProjectsGraphicDesign.vue'
import MangaOnline from '../views/projects/MangaOnline.vue'
import MarvelApi from '../views/projects/MarvelApi.vue'
import PokemonApi from '../views/projects/PokemonApi.vue'

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
      },
      {
        path: 'mangaonline',
        name: 'mangaonline',
        component: MangaOnline
      },      
      {
        path: 'marvelapi',
        name: 'marvelapi',
        component: MarvelApi
      },      
      {
        path: 'pokemonapi',
        name: 'pokemonapi',
        component: PokemonApi
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
  mode: 'history',
  history: createWebHashHistory(),
  routes
})

export default router
