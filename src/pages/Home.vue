<template>
    <Navbar />
    <Sidebar />
    <div class='ml-[90px] grid grid-cols-1 md:grid-cols-4'>
        <div class='col-span-3 mt-[60px]'>
            <Introduction />
            <About route="" />
            <Service /> 
            <Contact />
        </div>
        <div class='hidden md:block'>
            <ProgressBar />
            <ProfilePic />
        </div>
    </div>
    <Footer />
  </template>
  <script setup>
  import Navbar from '@/components/Navbar.vue'
  import Sidebar from '@/components/Sidebar.vue'
  import ProfilePic from '@/components/ProfilePic.vue'
  import ProgressBar from '@/components/ProgressBar.vue'
  import Introduction from '@/components/Introduction.vue'
  import Service from '@/components/Service.vue'
  import About from '@/components/About.vue'
  import Footer from '@/components/Footer.vue'
  import Contact from '@/components/Contact.vue'
  </script>