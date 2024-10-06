<template>
  <div class="w-1.5 bg-gray-200 fixed ml-[-5px] mt-[90px] h-full mb-4">
    <div
      class="bg-green-600 transition-all ease-out duration-100" :style="{height: {setScrollTop}}">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
    const setScrollTop = ref(0);
const onScroll = () => {
  const winScroll = document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = (winScroll / height) * 100;

  this.setScrollTop=(scrolled);
  console.log(setScrollTop)
  window.addEventListener("scroll",onScroll)
return ()=>window.removeEventListener("scroll",onScroll)
};
</script>

<style>
</style>