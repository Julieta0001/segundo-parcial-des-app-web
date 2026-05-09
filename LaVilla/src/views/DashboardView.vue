<template>
  <div class="dashboard-wrapper">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">

        <a class="navbar-brand ps-3" href="#">
          <img
            src="@/assets/lavillasinfondo.png"
            alt="Logo"
            width="50"
            height="40"
            class="d-inline-block align-text-top me-2"
          >
          La Villa
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">

          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <router-link
                to="/dashboard"
                class="nav-link text-white"
              >
                🏠Inicio
              </router-link>
            </li>

            <li class="nav-item">
              <router-link
                to="/productos"
                class="nav-link text-white"
              >
                🍛Productos
              </router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                📞Contactos
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                🛵Servicios
              </a>
            </li>

            <li class="nav-item">
              <a
                @click.prevent="logout"
                class="nav-link text-white"
                href="#"
                style="cursor: pointer;"
              >
                Cerrar sesión
              </a>
            </li>

          </ul>

        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <h1 class="text-center mb-4 text-white">Nuestros Productos</h1>
      
      <div class="row">
        <div 
          class="col-12 col-md-6 col-lg-4 mb-4" 
          v-for="(producto, index) in listaProductos" 
          :key="index"
        >
          <div class="card h-100 shadow border-0">
            <img 
              :src="producto.imagen" 
              class="card-img-top" 
              :alt="producto.nombre"
              style="height: 220px; object-fit: cover;"
            >
            
            <div class="card-body d-flex flex-column text-dark">
              <h5 class="card-title fw-bold">{{ producto.nombre }}</h5>
              <p class="card-text text-muted flex-grow-1">{{ producto.descripcion }}</p>
              
              <div class="mt-3">
                <h5 class="text-success fw-bold">{{ producto.precio }}</h5>
                <button class="btn btn-dark w-100 mt-2 shadow-sm">
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-view />
    </div>

  </div>
</template>

<script>
// Importación directa del JSON
import productosData from '@/assets/productos.json'; 

export default {
  name: 'DashboardView',

  data() {
    return {
      listaProductos: productosData
    }
  },

  methods: {
    logout() {
      console.log("Cerrando sesión...");
    }
  }
}
</script>

<style scoped>
/* Un toque de estilo para que no se vea tan simple */
.card {
  transition: all 0.3s ease-in-out;
  border-radius: 15px;
  overflow: hidden; /* Para que la imagen respete las esquinas redondeadas */
}

.card-img-top {
  border-bottom: 2px solid #eee;
}
</style>