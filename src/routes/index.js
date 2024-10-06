import AboutPages from '@/pages/AboutPages.vue'
import Home from '@/pages/Home.vue'
import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/', component: Home},
    { path: '/:about', component: AboutPages}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router