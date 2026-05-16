<template>
  <div class="dashboard-wrapper d-flex flex-column min-vh-100">
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm px-3">
      <div class="container-fluid">
        <span class="navbar-brand fw-bold text-success text-uppercase tracking-wider">
          🍃 La Villa Panel
        </span>
        
        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-row gap-4">
            <li class="nav-item">
              <router-link to="/dashboard" class="nav-link text-white-50 px-2" active-class="active-link">
                🏠 Inicio
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/dashboard/productos" class="nav-link text-white-50 px-2" active-class="active-link">
                🍗 Productos
              </router-link>
            </li>
          </ul>
          <div>
            <router-link to="/login" class="btn btn-outline-danger btn-sm rounded-pill px-3 transition-btn">
              Cerrar Sesión
            </router-link>
          </div>
        </div>
      </div>
    </nav>

    <main class="container py-5 flex-grow-1">
      <div v-if="$route.path === '/dashboard'" class="welcome-card p-5 text-center rounded-3 shadow-sm bg-white border-0">
        <h1 class="display-5 fw-bold text-dark mb-3">¡Bienvenida al Panel de La Villa!</h1>
        <p class="text-muted fs-5 max-w-md mx-auto">
          Gestiona el menú de tu restaurante de forma rápida y mantén siempre actualizados tus platos para los clientes.
        </p>
        <router-link to="/dashboard/productos" class="btn btn-success btn-lg rounded-pill mt-3 px-4 shadow-sm text-white fw-bold">
          Ver Catálogo de Platos
        </router-link>
      </div>

      <router-view />
    </main>

    <footer class="bg-dark text-white pt-4 pb-3 mt-5 border-top border-secondary shadow-lg">
      <div class="container text-center text-md-start">
        <div class="row g-3 align-items-center">
          
          <div class="col-12 col-md-4 text-center text-md-start">
            <h5 class="fw-bold text-success m-0">🍃 LA VILLA</h5>
            <p class="text-muted small m-0">Sabor único y tradicional en cada plato.</p>
          </div>
          
          <div class="col-12 col-md-8">
            <div class="d-flex flex-column flex-md-row justify-content-md-end align-items-center gap-3 gap-md-4">
              
              <a href="https://wa.me/573001234567" target="_blank" class="contact-item text-decoration-none text-white-50">
                <span class="me-1">📞</span> Celular: +57 300 123 4567
              </a>
              
              <a href="mailto:contacto@lavilla.com" class="contact-item text-decoration-none text-white-50">
                <span class="me-1">✉️</span> Correo: contacto@lavilla.com
              </a>
              
              <a href="https://instagram.com/la.villa_restaurante" target="_blank" class="contact-item text-decoration-none text-white-50">
                <span class="me-1">📸</span> Instagram: @la.villa_restaurante
              </a>
              
            </div>
          </div>

        </div>
        
        <div class="row mt-3 pt-3 border-top border-secondary">
          <div class="col text-center">
            <p class="text-muted small m-0">&copy; 2026 La Villa Restaurante. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'DashboardView'
}
</script>

<style scoped>
/* Estructura general de la vista */
.dashboard-wrapper {
  background-color: #f4f6f8; /* Fondo gris claro suave y limpio */
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.tracking-wider {
  letter-spacing: 1px;
}

/* Efecto activo para las opciones del menú */
.active-link {
  color: #198754 !important; /* El verde de la marca */
  font-weight: 600;
  border-bottom: 2px solid #198754;
}

/* Tarjeta de bienvenida con el toque verde lateral */
.welcome-card {
  border-left: 5px solid #198754 !important;
  transition: transform 0.3s ease;
}

.welcome-card:hover {
  transform: translateY(-2px);
}

.transition-btn {
  transition: all 0.2s ease-in-out;
}

/* Estilos de interactividad para el Footer */
.contact-item {
  font-size: 0.95rem;
  transition: color 0.2s ease-in-out;
}

.contact-item:hover {
  color: #198754 !important; /* Cambia a verde al pasar el cursor */
}
</style>