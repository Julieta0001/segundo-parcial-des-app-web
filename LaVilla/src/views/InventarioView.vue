<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4 text-white">Inventario</h1>
    <div class="card shadow border-0">
      <div class="card-body p-0">
        <table class="table table-striped table-hover mb-0">
          <thead class="table-dark">
            <tr>
              <th>Imagen</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(producto, index) in listaProductos" :key="index">
              <td>
                <img :src="producto.imagen" alt="producto.nombre" width="70" class="rounded" />
              </td>
              <td>{{ producto.nombre }}</td>
              <td>{{ producto.precio }}</td>
              <td>{{ producto.stock || 'N/A' }}</td>
              <td>
                <button class="btn btn-sm btn-primary me-1" @click="editar(producto)">Editar</button>
                <button class="btn btn-sm btn-danger me-1" @click="eliminar(producto)">Eliminar</button>
                <button class="btn btn-sm btn-outline-secondary" @click="verDetalle(producto)">Ver detalles</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import productosData from '@/assets/productos.json';

export default {
  name: 'InventarioView',
  data() {
    return {
      listaProductos: productosData.map(producto => ({
        ...producto,
        stock: Math.floor(Math.random() * 15) + 3
      }))
    }
  },
  methods: {
    editar(producto) {
      const nuevoPrecio = prompt('Ingresa un nuevo precio para ' + producto.nombre, producto.precio)
      const nuevoStock = prompt('Ingresa la nueva cantidad en stock para ' + producto.nombre, producto.stock)
      let actualizado = false

      if (nuevoPrecio !== null && nuevoPrecio.trim() !== '') {
        producto.precio = nuevoPrecio.trim()
        actualizado = true
      }
      if (nuevoStock !== null && nuevoStock.trim() !== '' && !Number.isNaN(Number(nuevoStock))) {
        producto.stock = Number(nuevoStock)
        actualizado = true
      }

      if (actualizado) {
        alert('Producto actualizado: ' + producto.nombre)
      }
    },
    eliminar(producto) {
      if (confirm('¿Eliminar ' + producto.nombre + ' del inventario?')) {
        this.listaProductos = this.listaProductos.filter(p => p !== producto)
      }
    },
    verDetalle(producto) {
      alert(`Producto: ${producto.nombre}\nPrecio: ${producto.precio}\nStock: ${producto.stock}\nDescripción: ${producto.descripcion}`)
    }
  }
}
</script>

<style scoped>
.table img {
  object-fit: cover;
}
</style>
