<template>
  <div class="px-8 mt-10 ">
    <div class="text-center mb-5">
        <h2 class="font-bold text-[24px]">{{ $route.fullPath.slice(1) }}</h2>
    </div>
    <div class="flex items-center gap-6">
        <div class="w-[40%]">
            <img src="https://i.pinimg.com/564x/3e/c4/aa/3ec4aa97edd2a620067069466b141c9c.jpg" 
            class="h-[22rem]">
        </div>
        <div class="w-[60%]">
            <p class="leading-8">
              Frontend development, also known as client-side development, focuses on
              the design and implementation of user interfaces in a website or web
              application. It involves creating visually appealing and intuitive
              layouts, ensuring smooth user experience, and implementing responsive
              design for various devices. Frontend developers use languages like HTML,
              CSS, and JavaScript to build these interfaces. They also work with
              frameworks and libraries such as React, Angular, and Vue.js for more
              complex interactions.
            </p>
        </div>
    </div>
  </div>
</template>
<script setup>
</script>