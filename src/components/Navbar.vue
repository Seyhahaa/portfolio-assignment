<template>
  <div class="flex items-center justify-between border-b-[1px] fixed w-full z-10 bg-white">
    <div class="w-[90px] h-[90px]">
      <img src="/logo.png" alt="" class="p-3 text-green-600" />
    </div>
    <div class="hidden md:flex gap-14">
      <div
        v-for="(item, index) in menu"
        :key="index"
        class="cursor-pointer hover:underline uppercase">
        <router-link :to="item.link"
          ><h2 class="text-xl">{{ $t(item.name) }}</h2></router-link
        >
      </div>
    </div>
    <div class="max-w-10 flex items-center justify-center mr-5">
      <img @click="changeLocale('khm')" :src="flag" class="object-fill cursor-pointer">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        { name: "Home", link: "/" },
        { name: "About", link: "/about" },
        { name: "Services", link: "/service" },
        { name: "Projects", link: "/project" },
        { name: "Contact", link: "/contact" },
      ],
      flag: '/cambodia.png',
    };
  },

  methods: {
    changeLocale() {
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "khm";
        this.flag = '/english.png'
      } else {
        this.$i18n.locale = "en";
        this.flag = '/cambodia.png'
      }
    },
  },
};
</script>