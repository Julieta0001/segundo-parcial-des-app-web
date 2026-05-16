import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProductoView from '@/views/ProductoView.vue'

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginView },
  { 
    path: '/dashboard', 
    component: DashboardView,
    children: [
      {
        path: 'productos', // Cuando entres a /dashboard/productos
        component: ProductoView
      }
    ]
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})