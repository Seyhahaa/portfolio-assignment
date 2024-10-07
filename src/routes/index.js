import About from '@/components/About.vue'
import Bio from '@/components/Bio.vue'
import AboutPages from '@/pages/About/AboutPages.vue'
import Home from '@/pages/Home.vue'
import { createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/', component: Home},
    { path: '/:about', component: AboutPages, children: [
        {path: '', component: About},
        {path: 'bio', component: Bio},
    ]},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router