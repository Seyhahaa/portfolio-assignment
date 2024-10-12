

<template>
  <div class="ml-0 md:ml-[90px] grid grid-cols-1 md:grid-cols-3">
    <div class="col-span-3 mt-[8rem]">
        
    <section class="bg-gray-100">
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div class="flex items-center mb-5">
            <div class='w-[20px] h-[7px] bg-green-600 rounded-full'></div>
            <div class='w-[36%] border-[1px] mx-4 mt-[-2px]'></div>
            <h2 class="text-[24px] font-bold uppercase">{{  $t('Contact') }}</h2>
            <div class='w-[36%] border-[1px] mx-4 mt-[-2px]'></div>
            <div class='w-[20px] h-[7px] bg-green-600 rounded-full'></div>
        </div>
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            
          <div class="lg:col-span-2 lg:py-12">
            <p class="max-w-xl text-lg">
              At the same time, the fact that we are wholly owned and totally independent from
              manufacturer and other group control gives you confidence that we will only recommend what
              is right for you.
            </p>
    
            <div class="mt-8">
              <a href="#" class="text-2xl font-bold text-green-600"> 093 274 166</a><br />
              <a href="#" class="text-2xl font-bold text-green-600"> Jbseyha@gmail.com</a>
    
              <address class="mt-2 not-italic">282 Bkk, Phnom Penh, Cambodia</address>
            </div>
          </div>
    
          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" class="space-y-4">
              <div>
                <label class="sr-only" for="name">Name</label>
                <input
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>
    
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label class="sr-only" for="email">Email</label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>
    
                <div>
                  <label class="sr-only" for="phone">Phone</label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
    

    
              <div>
                <label class="sr-only" for="message">Message</label>
    
                <textarea
                  class="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                ></textarea>
              </div>
    
              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Me
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
  
    </div>
    <Footer  class=""/>
  </template>
  <script setup>
  import Footer from '../components/Footer.vue'
</script>