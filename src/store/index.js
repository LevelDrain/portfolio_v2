import Vue from 'vue'
import Vuex from 'vuex'
//import * as Module from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        inHome: false,
        inWork: true,
        showSection: false
    },
    mutations: {
        openSection(state) {
            state.showSection = true
        },
        closeSection(state) {
            state.showSection = false
        }
    },
    actions: {},
    modules: {
        // page1: Module.page1,
        // page2: Module.page2,
        // page3: Module.page3
    }
})
