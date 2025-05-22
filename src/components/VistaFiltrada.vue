<template>
  <div class="vista-filtrada">
    <h2>Usuarios con emails que terminan en ".org"</h2>

    <div v-if="loading">Cargando datos...</div>
    <div v-else-if="error">{{ error }}</div>

    <ul v-else>
      <li v-for="usuario in usuariosFiltrados" :key="usuario.id">
        {{ usuario.name }} - {{ usuario.email }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import axios from 'axios'

const usuarios = ref([])
const loading = ref(true)
const error = ref(null)

// Filtro computado: usuarios con email que termina en '.org'
const usuariosFiltrados = computed(() =>
  usuarios.value.filter(user => user.email.endsWith('.org'))
)

onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    usuarios.value = response.data
  } catch (err) {
    error.value = 'Error al obtener los usuarios.'
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.vista-filtrada {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #e7f4ff;
  border-radius: 8px;
  color: #222;
}
</style>
