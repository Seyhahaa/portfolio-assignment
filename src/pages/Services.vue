<template>
    <div class="ml-[90px] grid grid-cols-1 md:grid-cols-3">
    <div class="col-span-2 mt-[8rem]">
        <Service />
      <Footer />
    </div>
    </div>
</template>
<script setup>
    import Service from '@/components/Service.vue'
    import Footer from '@/components/Footer.vue'
</script>