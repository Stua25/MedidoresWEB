import Vue from 'vue';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);
Vue.use(VueRouter);


import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue';

import Home from './components/Index.vue'

import CreateItem from './components/CreateItem.vue';
import DisplayItem from './components/DisplayItem.vue';
import EditItem from './components/EditItem.vue';

import InstitucionesHome from './components/Instituciones/Home.vue'

const routes = [
  {
    name: 'Index',
    path: '/',
    component: Home
  },
  {
    name: 'CreateItem',
    path: '/create/item',
    component: CreateItem
  },
  {
    name: 'EditItem',
    path: '/edit/:id',
    component: EditItem
  }, 
  {
    name: 'InstitucionesHome', 
    path: '/instituciones',
    component: InstitucionesHome
  }
];

const router = new VueRouter(
  { 
    mode: 'history', 
    routes: routes 
  }
  );
new Vue(Vue.util.extend({ router }, App)).$mount('#app');