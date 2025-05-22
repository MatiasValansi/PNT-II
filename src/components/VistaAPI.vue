<template>
  <div class="vista-api">
    <h2>Pokémon desde la API</h2>

    <div v-if="loading">Cargando pokémons...</div>
    <div v-else-if="error">{{ error }}</div>
    
    <ul v-else>
      <li v-for="pokemon in pokemons" :key="pokemon.name">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const pokemons = ref([])
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10')
    pokemons.value = response.data.results
  } catch (err) {
    error.value = 'Error al obtener los datos de la API.'
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.vista-api {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #000000;
  border-radius: 8px;
}
</style>
