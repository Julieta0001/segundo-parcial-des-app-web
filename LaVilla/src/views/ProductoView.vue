<template>
  <div class="container mt-5">
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
              <button
                class="btn btn-dark w-100 mt-2 shadow-sm"
                @click="irAPedido(producto)"
              >
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
// Importación directa del JSON
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