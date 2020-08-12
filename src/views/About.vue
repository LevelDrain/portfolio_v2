<template>
    <div class="about">
        <div class="box">
            <BubbleEffect class="upper"/>
            <img alt="illustya" src="@/assets/movie_baiyousou.png" height="500">
        </div>
    </div>
</template>

<script>
    import BubbleEffect from '@/components/Bubble.vue'

    export default {
        name: 'App',
        components: {
            BubbleEffect
        }
    }
</script>

<style>
    .box {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .upper {
        position: absolute;
        top: 18%;
    }
</style>
