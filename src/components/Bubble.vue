<template>
    <div ref="canvas"/>
</template>

<script>
    import * as pixiObj from '@/pixi/pixi';

    export default {
        name: "Bubble",
        data() {
            return {
                pixiApp: pixiObj.pixiApp,
                circles: pixiObj.circles,
                center: pixiObj.center,
                circle: null
            }
        },
        created() {
            this.pixiApp.ticker.speed = 0.3
            this.pixiApp.ticker.add((delta) => {
                this.animate(delta)
            })
        },
        mounted() {
            this.$refs.canvas.appendChild(this.pixiApp.view)
        },
        destroyed() {
            this.pixiApp.ticker.remove((delta) => {
                this.animate(delta)
            })
        },
        methods: {
            animate(delta) {
                for (let i = 0; i < this.circles.length; i++) {
                    this.circle = this.circles[i]
                    this.circle.position.x += this.circle.moveX * delta
                    this.circle.position.y += this.circle.moveY * delta
                    this.circle.alpha -= 0.01
                    if (this.circle.alpha < 0) {
                        this.circle.alpha = Math.random()
                        this.circle.position = {
                            x: this.center.x + Math.random() * 200 - 100,
                            y: this.center.y
                        }
                    }
                }
                this.pixiApp.renderer.render(this.pixiApp.stage)

                //今回はpixi.jsのtickerで毎フレーム呼び出す
                // setTimeout(() => {
                //     requestAnimationFrame(this.animate)
                // }, 1000 / 50)
            }
        }
    }
</script>

<style scoped>

</style>