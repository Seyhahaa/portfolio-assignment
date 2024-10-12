<template>
    <nav class="navbar fixed w-full z-10 shadow-md">
      <div class="brand"><img src="/logo.png" alt=""></div>
      <div class="menu-toggle" @click="toggleMenu" v-show="isMobile">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
      <div class="nav-links" :class="{ 'active': isMenuOpen || !isMobile }">
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
    </nav>
  </template>
  
  <script>
  export default {
    name: 'HamburgerMenu',
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

        isMenuOpen: false,
        isMobile: false
      }
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
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen
      },
      checkScreenSize() {
        this.isMobile = window.innerWidth <= 768
        if (!this.isMobile) {
          this.isMenuOpen = false
        }
      }
    },
    mounted() {
      this.checkScreenSize()
      window.addEventListener('resize', this.checkScreenSize)
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.checkScreenSize)
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background-color: white;
    color: white;
  }
  
  .brand {
    width: 50px;
  }
  
  .nav-links {
    display: flex;
    list-style: none;
  }
  
  .nav-links > div {
    margin-left: 1.5rem;
  }
  
  .nav-links a {
    color: #1a1a1a;
    font-size: 24px;
    font-weight: 600;
  }
  
  .menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
  }
  
  .bar {
    width: 25px;
    height: 3px;
    background-color: #1a1a1a;
    margin: 3px 0;
  }
  
  @media (max-width: 768px) {
    .nav-links {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 65px;
      left: 0;
      right: 0;
      background-color: white;
      padding: 1rem;
    }
  
    .nav-links.active {
      display: flex;
    }
  
    .nav-links > div  {
      margin: 0.5rem 0;
    }
  
    .menu-toggle {
      display: flex;
    }
  }
  </style>