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
                    <h2 class="text-gray-600 mb-2">{{item.desc}}</h2>
                    <router-link :to="item.link ">
                        <v-icon name="bi-arrow-right-circle" scale="2" class="bg-green-500 text-[35px] p-2 rounded-full text-white
                    cursor-pointer hover:scale-110 transition-all" />
                    </router-link>
                </div>
            </div>
        </div>
    </div>
    <div v-for="item of servicesList" :key="item.id">
        <ServiceDetail v-for="(items, index) in item.detail" :key="index"
        :desc="items.desc"  />
    </div>
    <router-view/>

</template>

<script setup>
import ServiceDetail from '@/components/ServiceDetail.vue';
const servicesList = [
        {
            id: 1,
            title: 'UX|UI DESIGN',
            desc: 'Elevate your online presence with captivating user interfaces and semless experiences',
            logo: "/design.png",
            link:'/service/uxui-design',
            detail: {
                desc: 'This is UXUI design',
                img: 'https://i.pinimg.com/564x/3e/c4/aa/3ec4aa97edd2a620067069466b141c9c.jpg',
            }
        },
        {
            id:2,
            title: 'BACKEND DEV',
            desc: 'Developing application backend and server side development using various backend technology',
            logo: "/backend.png",
            link:'/service/backend-development'
        },
        {
            id:3,
            title:'FRONTEND DEV',
            desc: 'Teaching programming and coding on various platform like yourtube, Udemy etc. Free Course to the students',
            logo: "/teaching.png",
            link:'/service/frontend-Development'
        }
    ];
</script>

