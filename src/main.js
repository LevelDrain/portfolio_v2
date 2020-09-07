import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(BootstrapVue)
Vue.use(VueMeta, {
    // optional pluginOptions
    refreshOnceOnNavigation: true
})
Vue.use(Loading)
Vue.component('loading', Loading)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
