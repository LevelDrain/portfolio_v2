import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: false,
        showSection: false
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
            console.log(payload)
        },
        openSection(state) {
            state.showSection = true
        },
        closeSection(state) {
            state.showSection = false
        }
    },
    actions: {},
    modules: {}
})
