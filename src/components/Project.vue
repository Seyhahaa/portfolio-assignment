<template>
    <div class="ml-[90px] grid grid-cols-1 md:grid-cols-3">
      <div class="col-span-3 mt-[8rem]">
        <div class="px-8">
          <div class="flex items-center mb-5">
            <div class="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
            <div class="w-full border-[1px] mx-4 mt-[-2px]"></div>
            <span class="text-[24px] font-bold uppercase">{{ $t('Projects') }}</span>
            <div class="w-full border-[1px] mx-4 mt-[-2px]"></div>
            <div class="w-[20px] h-[7px] bg-green-600 rounded-full"></div>
          </div>
          <p class="text-gray-500 mb-3"><em>Note: All this content are get from jsonplaceholder API</em></p>
          <div class="grid grid-cols-2 gap-6">
          <article
          v-for="(item,index) in data" :key="index"
            class="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
            <div class="rounded-[10px] p-4 !pt-20 sm:p-6 bg-white" >
              
              <time datetime="2022-10-10" class="block text-xs text-gray-500">
                10th Oct 2022
              </time>
  
              <a href="#">
                <h3 class="mt-0.5 text-lg font-medium text-gray-900">
                  {{item.title}}
                </h3>
              </a>
  
              <div class="mt-4 flex flex-wrap gap-1">
                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  Snippet
                </span>
  
                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  JavaScript
                </span>
  
                <span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                  VueJS
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
      data() {
          return {
               data: [],
          }
      },
  
      async  created() {
          try{
              const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=5')
              this.data = res.data;
          }catch (e) {
              console.error(e.message)
          }
      }
  }
  
  </script>