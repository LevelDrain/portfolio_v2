<template>
    <div ref="canvas"/>
</template>

<script>
    import * as pixiObj from '@/pixi/pixi'

    export default {
        name: "Bubble",
        data() {
            return {
                pixiApp: pixiObj.pixiApp,
            }
        },
        mounted() {
            this.$refs.canvas.appendChild(this.pixiApp.view)
        },
    }
</script>

<style scoped>

</style>