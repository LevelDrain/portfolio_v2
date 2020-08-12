<template>
    <div id="app">
        <HeaderBar/>
        <router-view/>
        <FooterBar/>
    </div>
</template>

<script>
    import HeaderBar from '@/components/HeaderBar'
    import FooterBar from '@/components/FooterBar'

    export default {
        name: 'App',
        components: {
            HeaderBar,
            FooterBar
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
