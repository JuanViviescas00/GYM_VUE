import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Pecho from '../views/Pecho.vue'
import Espalda from '../views/Espalda.vue'
import Piernas from '../views/Piernas.vue'
import Brazos from '../views/Brazos.vue'

const routes = [
  { path: '/', component: Inicio }, // La ruta raíz ahora carga la página de inicio
  { path: '/pecho', component: Pecho },
  { path: '/espalda', component: Espalda },
  { path: '/piernas', component: Piernas },
  { path: '/brazos', component: Brazos }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
