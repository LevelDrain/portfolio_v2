import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article4 from "@/components/articles/Article4";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/article4',
                component: Article4
            },
        ]
    },
    //{
    /* * route level code-splitting
    * this generates a separate chunk (about.[hash].js) for this route
    * which is lazy-loaded when the route is visited.
    * */

    //実装完了まで廃止
    //path: '/works',
    //name: 'Works',
    //component: () => import(/* webpackChunkName: "about" */ '../views/Works.vue')
    //},
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
