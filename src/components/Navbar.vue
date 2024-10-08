<template>
    <div class="flex items-center justify-between border-b-[1px] fixed w-full z-10 bg-white">
      <div class="w-[90px] h-[90px]">
        <img src="/logo.png" alt="" class="p-2 text-green-600" />
      </div>
      <div class="hidden md:flex gap-14">
          <div v-for="(item,index) in menu" :key="index" class="cursor-pointer hover:underline font-medium uppercase">
            <router-link :to="item.link"><h2>{{item.name}}</h2></router-link>
          </div>
      </div>
      <div class="w-[90px] h-[90px] bg-red-400 flex items-center justify-center">
        <svg
          class="w-10 h-10 text-white"
          data-slot="icon"
          fill="none"
          stroke-width="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"></path>
        </svg>
      </div>
    </div>
</template>
<script setup>
  const menu = [
    { name: 'Home', link: '/'},
    { name: 'About', link: '/about'  },
    { name: 'Services', link: '/service'},
    { name: 'Projects', link: '/projects'},
    { name: 'Contact', link: '/contact'},
]
</script>