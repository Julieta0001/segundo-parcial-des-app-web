<template>
  <div id="app">
    <NavbarComponent />

    <div class="app-layout">
      <SidebarComponent v-if="$route.path !== '/'" />

      <main class="main-content">
        <router-view />
      </main>
    </div>

    <FooterComponent />
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavbarComponent,
    SidebarComponent,
    FooterComponent
  }
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-layout {
  display: flex;
  flex: 1;
  gap: 1rem;
  padding: 1rem;
}

.sidebar {
  width: 220px;
  flex-shrink: 0;
}

.main-content {
  flex: 1;
}

.footer {
  text-align: center;
  padding: 1rem 0;
}

@media (max-width: 768px) {
  .app-layout {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }
}
</style>