import About from '@/components/About.vue'
import Contact from '@/pages/Contact.vue'
import NotFound from '@/components/NotFound.vue'
import ServiceDetail from '@/components/ServiceDetail.vue'
import Home from '@/pages/Home.vue'
import Service from '@/pages/Services.vue'
import { createRouter, createWebHistory} from 'vue-router'
import Project from '@/pages/Project.vue'

const routes = [
    { path: '/', name: Home, component: Home},
    { path: '/service', name:Service, component: Service, children: [
        {path: '/service/:id',name: Service, component: ServiceDetail}
    ]},
    { path: '/about',name: About, component: About},
    { path: '/contact', name: Contact, component: Contact},
    {path: '/project', name: Project, component: Project},
    {path: '/:pathMatch(.*)*',name: NotFound, component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router