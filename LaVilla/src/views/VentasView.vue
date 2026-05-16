<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4 text-white">Registro de ventas</h1>
    <div class="card shadow border-0">
      <div class="card-body p-0">
        <table class="table table-striped table-hover mb-0">
          <thead class="table-dark">
            <tr>
              <th>#</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Fecha</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="ventas.length === 0">
              <td colspan="4" class="text-center">No hay ventas registradas.</td>
            </tr>
            <tr v-for="(venta, index) in ventas" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ venta.producto }}</td>
              <td>{{ venta.precio }}</td>
              <td>{{ venta.fecha }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VentasView',
  data() {
    return {
      ventas: []
    }
  },
  created() {
    const ventasGuardadas = localStorage.getItem('ventas')
    this.ventas = ventasGuardadas ? JSON.parse(ventasGuardadas) : []
  }
}
</script>

<style scoped>
.table td,
.table th {
  vertical-align: middle;
}
</style>
