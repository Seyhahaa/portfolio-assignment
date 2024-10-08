<template>
  <div class="ml-[90px] grid grid-cols-1 md:grid-cols-3">
    <div class="col-span-2 mt-[8rem]">
      
      <AboutComponent />
      <Footer />
    </div>
    <div>
      <ProgressBar />     
        <Bio />
    </div>
  </div>
</template>
<script setup>
import ProgressBar from "./ProgressBar.vue";
import Bio from "./Bio.vue";
import AboutComponent from "./AboutComponent.vue";
import Footer from "./Footer.vue";
</script>