import { createWebHistory, createRouter } from 'vue-router'

import Todos from '../views/Todos.vue'
import TodoDetails from '../views/TodoDetails.vue'

const history = createWebHistory()

const routes = [
  {
    path: '/',
    component: Todos,
    name: 'home',
  },
  {
    path: '/:id',
    component: TodoDetails,
    name: 'TodoDetails',
  }
]

const router = createRouter({ history, routes })

export default router
