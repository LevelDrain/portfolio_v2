<template>
  <div ref="canvas" />
</template>

<script>
import * as PIXI from 'pixi.js'
import img_buble from '../assets/img/bubble.png'

export default {
  name: 'Bubble',
  data() {
    return {
      pixiApp: null,
      backgroundAlpha: 0,
      background: null,
      center: null,
      circles: [],
    }
  },
  created() {
    this.pixiApp = new PIXI.Application({width: window.innerWidth, height: window.innerHeight, transparent: true})

    //背景
    this.background = new PIXI.Graphics()
    this.background.beginFill(0x000000, this.backgroundAlpha)
    this.background.drawRect(0, 0, this.pixiApp.renderer.screen.width, this.pixiApp.renderer.screen.height)
    this.background.endFill()
    this.pixiApp.stage.addChild(this.background)

    //泡の生成
    const totalCircle = 80
    this.center = {x: this.pixiApp.renderer.screen.width / 2, y: this.pixiApp.renderer.screen.height}

    while (this.circles.length < totalCircle) {
      let circle = PIXI.Sprite.from(img_buble)
      circle.height = circle.width = Math.random() * 10 + 1 + 10
      circle.alpha = Math.random()
      circle.position.x = this.center.x + Math.random() * 1000 - 500
      circle.position.y = this.center.y + Math.random() * 1000 - 500
      circle.moveX = Math.random() * 6 - 3
      circle.moveY = Math.random() * -15

      this.circles.push(circle)
      this.pixiApp.stage.addChild(circle)
    }
  },
  mounted() {
    this.$refs.canvas.appendChild(this.pixiApp.view)

    //アニメーション
    this.pixiApp.ticker.speed = 0.3
    this.pixiApp.ticker.add((delta) => {
      this.animate(delta)
    })
    //開いているときはアニメーション止める（処理落ち防止）
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'openSection') {
        this.pixiApp.ticker.stop()
      } else {
        this.pixiApp.ticker.start()
      }
    })
  },
  destroyed() {
    this.$refs
    this.pixiApp.stage.removeChildren()
  },
  methods: {
    animate(delta) {
      for (let i = 0; i < this.circles.length; i++) {
        let each = this.circles[i]
        each.position.x += each.moveX * delta
        each.position.y += each.moveY * delta
        each.alpha -= 0.01
        if (each.alpha < 0) {
          each.alpha = Math.random()
          each.position = {
            x: this.center.x + Math.random() * 1000 - 500,
            y: this.center.y + Math.random() * 1000 - 500
          }
        }
      }
      this.pixiApp.renderer.render(this.pixiApp.stage)
    }
  }
}
</script>