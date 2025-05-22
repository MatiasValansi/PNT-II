import { createRouter, createWebHistory } from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import Prueba from './components/Prueba.vue';
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import VistaAPI from './components/VistaAPI.vue';
import VistaFiltrada from './components/VistaFiltrada.vue';

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/prueba',
    name: 'Prueba',
    component: Prueba
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/vistaApi',
    name: 'VistaAPI',
    component: VistaAPI
  },{
    path: '/vistaFiltrada',
    name: 'VistaFiltrada',
    component: VistaFiltrada
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;