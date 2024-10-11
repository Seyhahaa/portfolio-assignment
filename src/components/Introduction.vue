<template>
    <div className='flex justify-center items-center flex-col'>
        <div class='h-[120px] border-r-[1px]'></div>
        <div class='w-[5px] h-[5px] bg-green-600 rounded-full'></div>
        <h2 class='mt-5 text-black text-[15px] font-medium tracking-[0.5rem]'>{{ $t('intro') }}</h2>
        <h2 class='text-[70px] font-bold text-black tracking-widest'>{{ $t('fName') }}<br/>{{ $t('lName') }}</h2>
        <img src="/Profile.jpg" class='w-[160px] h-[160px] bg-gray-200 p-7 rounded-full object-cover mt-4' alt="" />
    </div>
</template>