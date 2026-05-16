import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProductoView from '@/views/ProductoView.vue'
import PedidoView from '@/views/PedidoView.vue'
import InventarioView from '@/views/InventarioView.vue'
import VentasView from '@/views/VentasView.vue'

const routes = [
  { path: '/', component: LoginView },
  { path: '/dashboard', component: DashboardView },
  { path: '/productos', component: ProductoView },
  { path: '/inventario', component: InventarioView },
  { path: '/ventas', component: VentasView },
  { path: '/pedido', component: PedidoView }
]

export default createRouter({
  history: createWebHistory(),
  routes
})