<template>
  <div class="px-8 mt-10 ">
    <div class="text-center mb-5">
        <h2 class="font-bold text-[24px] uppercase">{{ $route.params.id }}</h2>
    </div>
    <div class="flex items-center gap-6">
        <div class="w-[40%]">
            <img :src="img" 
            class="h-[22rem]">
        </div>
        <div class="w-[60%]">
            <p class="leading-8">
              {{ desc }}
            </p>
        </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['img', 'desc'])
</script>