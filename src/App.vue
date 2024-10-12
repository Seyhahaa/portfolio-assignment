<template>
  <HamburgerMenu />
  <div class="hidden md:block">
    <Sidebar />
  </div>
  <router-view />
  
</template>
<script setup>
import HamburgerMenu from './components/HamburgerMenu.vue';
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
</script>