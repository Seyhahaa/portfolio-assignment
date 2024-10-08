<template>
    <div class="px-8 mt-10 ">
    <div class="flex items-center">
            <div class='w-[20px] h-[7px] bg-green-600 rounded-full'></div>
            <div class='w-full border-[1px] mx-4 mt-[-2px]'></div>
            <h2 class="text-[24px] font-bold">CONTACT</h2>
            <div class='w-full border-[1px] mx-4 mt-[-2px]'></div>
            <div class='w-[20px] h-[7px] bg-green-600 rounded-full'></div>
    </div>
    <h2 class="font-bold text-2xl">Get in touch</h2>    
    <div class="flex justify-between w-full gap-5 mt-5">    
        <div>
            <div class="ml-5">
                <h2 class="mb-3">E-MAIL</h2>
                <v-icon name="md-email-round" class="text-gray-600" /><span class="text-[16px] text-gray-600">:Jbseyha@gmail.com</span>
                <h2 class="mt-5 mb-3">TELEGRAM</h2>
                <v-icon name="bi-telegram" class="text-gray-600" /><span class="text-[16px] text-gray-600">:+855 93 274 166</span>
            </div>
        </div>
        <div class="w-[50%] -mt-6">
            <label
            for="UserEmail"
            class="relative block overflow-hidden border-b border-black bg-transparent pt-3 focus-within:border-blue-600">
            <input
                type="email"
                id="UserEmail"
                placeholder="Email"
                class="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"/>
            <span class="absolute start-0 top-2 -translate-y-1/2 text-2xl text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
                Email
            </span>
            </label>

          

            <div class="mt-5">
                <label for="" class="sr-only">Order notes</label>
            
                <div class="overflow-hidden">
                <textarea
                    id=""
                    class="border-b w-full resize-none border-x-0 border-t-0 border-gray-200 px-0 align-top sm:text-sm"
                    rows="4"
                    placeholder="Your Messages..."></textarea>
            
                <div class="flex items-center justify-end gap-5 py-3 mr-3 mt-3">
                    <button
                    type="button"
                    class="rounded-full bg-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700  hover:text-white"
                    >
                    Clear
                    </button>
            
                    <button
                    type="button"
                    class="rounded-full bg-green-500 px-4 py-1.5 text-sm font-medium text-white ">
                    Send
                    </button>
                </div>
                </div>
            </div>

    </div>
    </div>
</div>
</template>