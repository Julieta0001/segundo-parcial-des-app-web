<template>
  <div class="dashboard-wrapper">

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
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
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link text-white" href="#contacto">
                📞Contactos
              </a>
            </li>

          </ul>
          <button @click="logout" class="btn btn-outline-light ms-auto">
            Cerrar sesión
          </button>
        </div>
      </div>
    </nav>

    <div class="container mt-4">
      <h1 class="text-center mb-4 text-dark">Productos destacados</h1>
      
      <div class="row">
        <div 
          class="col-12 col-md-6 col-lg-4 mb-4" 
          v-for="(producto, index) in listaProductos.slice(0, 3)" 
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

      <section id="contacto" class="contact-section mt-5">
        <div class="contact-container p-4 bg-light rounded shadow-sm">
          <h2>Contáctanos</h2>
          <p>¿Tienes alguna duda sobre los productos de La Villa? Envíanos un mensaje.</p>

          <form action="#" method="POST" class="contact-form">
            <div class="mb-3">
              <label for="name" class="form-label">Nombre Completo</label>
              <input type="text" id="name" name="name" class="form-control" placeholder="Tu nombre" required>
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Correo Electrónico</label>
              <input type="email" id="email" name="email" class="form-control" placeholder="tu@correo.com" required>
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Mensaje</label>
              <textarea id="message" name="message" class="form-control" rows="5" placeholder="Escribe tu mensaje aquí..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
          </form>
        </div>
      </section>

      <div class="text-center mt-3">
        <router-link to="/productos" class="btn btn-outline-light">
          Ver todos los productos
        </router-link>
      </div>

      <div id="servicios" class="mt-5 pt-4">
        <h2 class="text-white">Servicios</h2>
        <p class="text-white-50">Ofrecemos pedidos para llevar, entrega a domicilio y catering para eventos pequeños.</p>
      </div>

      <div id="contacto" class="mt-5 pt-4">
        <h2 class="text-white">Contacto</h2>
        <ul class="list-unstyled text-white-50">
          <li><strong>Teléfono:</strong> +54 9 11 1234-5678</li>
          <li><strong>Correo:</strong> contacto@lavilla.com</li>
          <li><strong>Facebook:</strong> facebook.com/lavilla</li>
        </ul>
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
      this.$router.push('/')
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

.contact-section {
  margin-top: 2rem;
}

.contact-container h2 {
  margin-bottom: 1rem;
}

.contact-form .form-control {
  border-radius: 0.5rem;
}

.contact-form .btn {
  min-width: 160px;
}
</style>