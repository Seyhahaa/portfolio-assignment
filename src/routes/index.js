import About from '@/components/About.vue'
import NotFound from '@/components/NotFound.vue'
import Home from '@/pages/Home.vue'
import Service from '@/pages/Services.vue'
import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/', component: Home},
    { path: '/service', component: Service},
    { path: '/about', component: About},
    {path: '/:pathMatch(.*)*', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router