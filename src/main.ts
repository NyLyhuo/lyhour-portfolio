import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import './assets/style.css'
import './assets/animation.css'
import App from './App.vue'
import FontAwesomeIcon from './font-awesome.ts';
import Project from './views/Project.vue'
import Demo from './views/Demo.vue'
import Home from './views/Home.vue'

const routes = [
    {path: '/', component: Home},
    {path: '/project', component: Project},
    {path: '/demo', component: Demo},
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)
    app.use(router)
    app.component('font-awesome-icon', FontAwesomeIcon)
    app.mount('#app')
            
