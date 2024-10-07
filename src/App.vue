<template>
  <Navbar />
  <Sidebar />
  <router-view />
  
</template>
<script setup>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import Footer from './components/Footer.vue';
</script>