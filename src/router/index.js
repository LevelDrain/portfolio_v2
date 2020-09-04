import Vue from 'vue'
import VueRouter from 'vue-router'
import $store from "@/store/index"
import Home from '@/views/Home'
import Article1 from "@/components/articles/Article1";
import Article2 from "@/components/articles/Article2";
import Article3 from "@/components/articles/Article3";
import Article4 from "@/components/articles/Article4";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'skills',
                component: Article1,
            },
            {
                path: 'profile',
                component: Article2,
            },
            {
                path: 'about',
                component: Article3,
            },
            {
                path: 'library',
                component: Article4,
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

router.afterEach((to) => {
    if (to.path !== '/') {
        //Homeからrouter経由であればstoreにアクセスできないためwatch使わない
        //url変更と同時に開く処理をstoreに転送
        $store.commit('openSection');
    } else {
        //ホームに戻る場合に閉じさせる
        $store.commit('closeSection');
    }
});

export default router
