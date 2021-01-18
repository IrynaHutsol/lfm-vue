import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Artist from '../views/Artist.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/artist',
        name: 'Artist',
        component: Artist
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
