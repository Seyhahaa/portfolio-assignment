<template>
  <div class="ml-[90px] grid grid-cols-1 md:grid-cols-4">
    <div class="col-span-3 mt-[60px]">
      <Introduction />
      <AboutComponent />
      <Service />
      <Contact />
      <Footer />
    </div>
    <div>
      <ProgressBar />
      <div class='fixed mt-[90px]'>
            <img src='/homepage.jpeg' class='h-screen object-fill'  />
        </div>
    </div>
  </div>
</template>
  <script setup>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "@/components/Sidebar.vue";
import ProfilePic from "@/components/ProfilePic.vue";
import ProgressBar from "@/components/ProgressBar.vue";
import Introduction from "@/components/Introduction.vue";
import Service from "@/components/Service.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import Footer from "@/components/Footer.vue";
import Contact from "@/components/Contact.vue";
</script>