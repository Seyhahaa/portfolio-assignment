<template>
  <div class="px-8 mt-12">
        <div class="flex items-center">
            <div class='w-[20px] h-[7px] bg-green-600 rounded-full'></div>
            <div class='w-full border-[1px] mx-4 mt-[-2px]'></div>
            <h2 class="text-[24px] font-bold">SERVICES</h2>
            <div class='w-full border-[1px] mx-4 mt-[-2px]'></div>
            <div class='w-[20px] h-[7px] bg-green-600 rounded-full'></div>
        </div>
        <div class="flex justify-around mt-16 ">
            <div class="px-2 text-center min-w-[33%]"
                v-for="(item, index) in servicesList" :key="index">
                <div class="bg-white flex-col flex items-center p-3 rounded-lg drop-shadow-lg">
                    <div class="bg-gray-200 rounded-full w-[80px]  ">
                        <img :src="item.logo" class="w-[80px] p-5 hover:scale-110 transition-all cursor-pointer" />
                    </div>
                    <h2 class="mt-5 font-bold">{{item.title}}</h2>
                    <h2 class="text-gray-600 text-sm mb-2">{{item.desc}}</h2>
                    <router-link :to="item.title ">
                        <v-icon name="bi-arrow-right-circle" scale="2" class="bg-green-500 text-[35px] p-2 rounded-full text-white
                    cursor-pointer hover:scale-110 transition-all" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <router-view />
</template>

<script setup>
const servicesList = [
        {
            id: 1,
            title: 'UX|UI DESIGN',
            desc: 'Elevate your online presence with captivating user interfaces and semless experiences',
            logo: "/design.png",
            link:''
        },
        {
            id:2,
            title: 'BACKEND DEV',
            desc: 'Developing application backend and server side development using various backend technology',
            logo: "backend.png"
        },
        {
            id:3,
            title:'FRONTED DEV',
            desc: 'Teaching programming and coding on various platform like yourtube, Udemy etc. Free Course to the students',
            logo: "/teaching.png"
        }
    ];
</script>

