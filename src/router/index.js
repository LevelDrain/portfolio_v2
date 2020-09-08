import Vue from 'vue'
import VueRouter from 'vue-router'
import $store from "@/store/index"
import {setTitle} from '@/mixins'
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
        meta: {
            title: 'ホーム',
            desc: 'ホーム'
        },

        children: [
            {
                path: 'article1',
                component: Article1,
                meta: {
                    title: 'スキル',
                    desc: 'スキルとピックアップ作品'
                },
            },
            {
                path: 'article2',
                component: Article2,
                meta: {
                    title: 'プロフィール',
                    desc: '作者 Level Drain についてのプロフィール'
                },
            },
            {
                path: 'article3',
                component: Article3,
                meta: {
                    title: 'ポートフォリオについて',
                    desc: 'このポートフォリオについて'
                },
            },
            {
                path: 'article4',
                component: Article4,
                meta: {
                    title: '上島名言集',
                    desc: '凹んだ時に元気になる上島氏の名言'
                },
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

router.beforeEach((to, from, next) => {
    setTitle(to.meta.title)
    next()
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
