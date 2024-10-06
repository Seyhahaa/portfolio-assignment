<template>
    <Navbar />
    <Sidebar />
    <div class='ml-[90px] grid grid-cols-1 md:grid-cols-4'>
        <div class='col-span-3 mt-[8rem]'>
            <About route="about"/>
        </div>
        <div class='hidden md:block'>
            <ProgressBar />
            <ProfilePic />
        </div>
    </div>
</template>
<script setup>
    import About from '@/components/About.vue'
    import Navbar from '@/components/Navbar.vue'
    import ProgressBar from '@/components/ProgressBar.vue'
    import ProfilePic from '@/components/ProfilePic.vue'
    import Sidebar from '@/components/Sidebar.vue'
</script>