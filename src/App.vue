<template>
    <div id="app">
        <div class="box">
            <BubbleEffect class="upper"/>
            <img alt="illustya" src="./assets/movie_baiyousou.png" height="500">
        </div>
    </div>
</template>

<script>
    import BubbleEffect from './components/Bubble.vue'

    export default {
        name: 'App',
        components: {
            BubbleEffect
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
        margin-top: 60px;
    }
    .box{
        position:relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .upper{
        position: absolute;
        top: 18%;
    }
</style>
