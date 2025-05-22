<template>
  <nav class="menu">
    <ul>
      <li><a href="/">Inicio</a></li>
      <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
      <li><a href="/contacto">Contacto</a></li>
    </ul>
  </nav>
</template>

<script setup>
// No hay lógica aún, pero se puede agregar navegación programática o rutas
</script>

<style scoped>
.menu {
  background-color: #444;
  padding: 1rem;
}
.menu ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}
.menu a {
  color: white;
  text-decoration: none;
}
.menu a:hover {
  text-decoration: underline;
}
</style>
