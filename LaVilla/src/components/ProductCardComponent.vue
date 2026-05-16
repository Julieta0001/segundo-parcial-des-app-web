<template>
  <div class="product-card">
    <img src="https://via.placeholder.com/150" alt="Producto" class="product-img" />
    <div class="product-info">
      <h3 class="product-name">Nombre del Producto</h3>
      <p class="product-price">$15,000</p>
      <button class="product-btn">Detalles</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardComponent'
}
</script>

<style scoped>
.product-card {
  border: 1px solid #dee2e6;
  border-radius: 1rem;
  overflow: hidden;
  max-width: 320px;
  background: #fff;
}

.product-img {
  width: 100%;
  display: block;
}

.product-info {
  padding: 1rem;
}

.product-name {
  margin: 0 0 0.5rem;
  font-size: 1.1rem;
}

.product-price {
  color: #198754;
  margin-bottom: 1rem;
}

.product-btn {
  width: 100%;
  padding: 0.75rem;
  border: none;
  background: #343a40;
  color: #fff;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
