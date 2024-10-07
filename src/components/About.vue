<template>
  <div class="ml-[90px] grid grid-cols-1 md:grid-cols-3">
    <div class="col-span-2 mt-[8rem]">
      
      <AboutComponent />
      <Footer />
    </div>
    <div>
      <ProgressBar />
      <div v-if="$route.params.about === 'bio'">
        
        <Bio />
      </div>
      <div v-else>
        <div class='fixed mt-[90px]'>
            <img src='/about.webp' class='h-screen object-cover'  />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ProgressBar from "./ProgressBar.vue";
import ProfilePic from "./ProfilePic.vue";
import Bio from "./Bio.vue";
import AboutComponent from "./AboutComponent.vue";
import Footer from "./Footer.vue";
</script>