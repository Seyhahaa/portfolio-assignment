<template>
    <div class="mt-8 px-6 md:px-10 lg:px-44 text-center flex flex-col items-center">
        <h2 class="text-[40px] font-bold">
          {{ $t('message') }}
        </h2>
        <v-icon
          name="co-double-quote-sans-left"
          scale="2.5"
          class="bg-green-500 p-3 rounded-full text-white"
        />
        <h2 class="my-5 text-gray-600 text-[14px]">
          {{ $t('about') }}
          
        </h2>
        <v-icon
          name="co-double-quote-sans-right"
          scale="2.5"
          class="bg-green-500 p-3 rounded-full text-white"
        />
      </div>
</template>