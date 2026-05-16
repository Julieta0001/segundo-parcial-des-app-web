<template>
  <aside class="sidebar">
    <div class="sidebar-brand">La Villa</div>
    <nav class="sidebar-menu">
      <router-link to="/dashboard" class="sidebar-link">Inicio</router-link>
      <router-link to="/productos" class="sidebar-link">Productos</router-link>
      <router-link to="/inventario" class="sidebar-link">Inventario</router-link>
      <router-link to="/ventas" class="sidebar-link">Ventas</router-link>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'SidebarComponent'
}
</script>

<style scoped>
.sidebar {
  background: #f8f9fa;
  border: 1px solid #dee2e6;
  border-radius: 0.75rem;
  padding: 1rem;
}

.sidebar-brand {
  font-weight: bold;
  margin-bottom: 1rem;
}

.sidebar-menu {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sidebar-link,
.sidebar-menu a {
  color: #212529;
  text-decoration: none;
}

.sidebar-link.active,
.sidebar-menu a.active {
  font-weight: 700;
}
</style>
