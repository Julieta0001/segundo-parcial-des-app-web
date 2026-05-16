<template>
  <div class="container mt-5">
    <div class="card shadow border-0">
      <div class="card-body">
        <h1 class="card-title text-center mb-4">Realizar Pedido</h1>
        <p class="lead">Has seleccionado: <strong>{{ productoSeleccionado }}</strong></p>
        <p>Completa tus datos y confirma tu pedido.</p>

        <form>
          <div class="mb-3">
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control" placeholder="Tu nombre" />
          </div>
          <div class="mb-3">
            <label class="form-label">Dirección</label>
            <input type="text" class="form-control" placeholder="Dirección de entrega" />
          </div>
          <div class="mb-3">
            <label class="form-label">Teléfono</label>
            <input type="tel" class="form-control" placeholder="Número de contacto" />
          </div>
          <button type="button" class="btn btn-success w-100">Confirmar pedido</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PedidoView',
  computed: {
    productoSeleccionado() {
      return this.$route.query.producto || 'Ninguno';
    }
  }
}
</script>

<style scoped>
.card {
  border-radius: 16px;
}
</style>
