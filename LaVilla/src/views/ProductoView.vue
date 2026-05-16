<template>
  <div class="container animate-fade-in">
    <div class="text-center mb-5">
      <h1 class="display-6 fw-bold text-dark position-relative d-inline-block pb-2">
        Nuestros Productos
        <span class="underline-bar"></span>
      </h1>
      <p class="text-muted">Explora las delicias disponibles en nuestro menú para hoy</p>
    </div>
    
    <div class="row g-4">
      <div 
        class="col-12 col-md-6 col-lg-4" 
        v-for="(producto, index) in listaProductos" 
        :key="index"
      >
        <div class="card h-100 shadow-sm border-0 product-card bg-white">
          <div class="img-container">
            <img 
              :src="producto.imagen" 
              class="card-img-top" 
              :alt="producto.nombre"
            >
          </div>
          
          <div class="card-body d-flex flex-column p-4">
            <h5 class="card-title fw-bold text-dark mb-2">{{ producto.nombre }}</h5>
            <p class="card-text text-secondary flex-grow-1 fs-6 lh-base">{{ producto.descripcion }}</p>
            
            <div class="mt-4 pt-3 border-top border-light">
              <div class="d-flex justify-content-between align-items-center">
                <span class="text-muted small">Precio</span>
                <h4 class="text-dark fw-bold m-0">{{ producto.precio }}</h4>
              </div>
              <button class="btn btn-success w-100 mt-3 rounded-pill fw-bold text-white shadow-sm action-btn">
                Comprar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productosData from '@/assets/productos.json'; 

export default {
  name: 'ProductosView',
  data() {
    return {
      listaProductos: productosData
    }
  },
  methods: {
    irAPedido(producto) {
      const ventaActual = {
        producto: producto.nombre,
        precio: producto.precio,
        fecha: new Date().toLocaleString()
      }
      const ventasGuardadas = JSON.parse(localStorage.getItem('ventas') || '[]')
      localStorage.setItem('ventas', JSON.stringify([...ventasGuardadas, ventaActual]))
      this.$router.push({
        path: '/pedido',
        query: { producto: producto.nombre }
      })
    }
  }
}
</script>

<style scoped>
/* Coherencia visual en tarjetas (Bordes idénticos a la bienvenida) */
.product-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Efecto sutil al pasar el mouse */
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08) !important;
}

/* Contenedor de imagen para que no se deformen */
.img-container {
  height: 220px;
  overflow: hidden;
  background-color: #f8f9fa;
}

.img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .img-container img {
  transform: scale(1.04);
}


.underline-bar {
  position: absolute;
  bottom: 0;
  left: 25%;
  width: 50%;
  height: 3px;
  background-color: #198754;
  border-radius: 2px;
}

/* Botón de acción con transiciones suaves */
.action-btn {
  background-color: #198754;
  border: none;
  transition: all 0.2s ease;
}

.action-btn:hover {
  background-color: #146c43;
  transform: scale(1.01);
}

/* Animación sutil de entrada de página */
.animate-fade-in {
  animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>