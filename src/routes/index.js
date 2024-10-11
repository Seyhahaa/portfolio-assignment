import About from '@/components/About.vue'
import Contact from '@/pages/Contact.vue'
import NotFound from '@/components/NotFound.vue'
import Home from '@/pages/Home.vue'
import Service from '@/pages/Services.vue'
import { createRouter, createWebHistory} from 'vue-router'
import Project from '@/pages/Project.vue'
import Design from '@/components/serviceDetail/design.vue'
import Backend from '@/components/serviceDetail/backend.vue'
import FrontEnd from '@/components/serviceDetail/frontEnd.vue'

const routes = [
    { path: '/', name: Home, component: Home},
    { path: '/service', name:Service, component: Service, children: [
        {path: '/service/design',name: Service, component: Design},
        {path: '/service/backend',name: Service, component: Backend},
        {path: '/service/frontend',name: Service, component: FrontEnd},
        

    ]},
    { path: '/about',name: About, component: About},
    { path: '/contact', name: Contact, component: Contact},
    { path: '/project', name: Project, component: Project},
    
    {path: '/:pathMatch(.*)*',name: NotFound, component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router