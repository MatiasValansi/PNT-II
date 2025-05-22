<script setup>
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <h1>PROBANDO RUTEO DE VUE</h1>
    
    <router-link to="/helloWorld">HelloWorld</router-link> 
    |
    <router-link to="/prueba">prueba</router-link>
    |
    <router-link to="/footer">Footer</router-link>
    |
    <router-link to="/menu">Menu</router-link>
    |
    <router-link to="/vistaApi">VistaAPI</router-link>
    |
    <router-link to="/vistaFiltrada">VistaFiltrada</router-link>

    <router-view></router-view>
    

  </div>
</template>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
