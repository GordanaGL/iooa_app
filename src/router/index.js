import useLogin from '@/composables/useLogin'
import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'



const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },

    {
        path: '/login',
        name: 'Login',
        component: () => import ('../views/Login.vue')
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () => import ('../views/Signup.vue')

    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router 

