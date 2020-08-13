import * as PIXI from 'pixi.js'

const pixiApp = new PIXI.Application({width: window.innerWidth, height: window.innerHeight, transparent: true})

//背景透過
const backgroundAlpha = 0
const background = new PIXI.Graphics()
background.beginFill(0x000000, backgroundAlpha)
background.drawRect(0, 0, pixiApp.renderer.screen.width, pixiApp.renderer.screen.height)
background.endFill()
pixiApp.stage.addChild(background)

//アニメーション部分
const totalCircle = 50, center = {x: pixiApp.renderer.screen.width / 2, y: pixiApp.renderer.screen.height}
let circles = [], circle

let bubbleTexture = new PIXI.Texture.from('../img/logo.png')
while (circles.length < totalCircle) {
    let bubbleSprite = new PIXI.Sprite(bubbleTexture)
    bubbleSprite.alpha = Math.random()
    bubbleSprite.anchor.set(0.5)
    bubbleSprite.x = center.x + Math.random() * 1000 - 500
    bubbleSprite.x = center.y + Math.random() * 1000 - 500
    circles.push(bubbleSprite)
    pixiApp.stage.addChild(bubbleSprite)

    // let circle = new PIXI.Graphics()
    // let scale = Math.random() * 10 + 1
    // circle.beginFill(0Xffffff)
    // circle.arc(0, 0, scale, 0, Math.PI * 2)
    // circle.alpha = Math.random()
    // circle.position = {x: center.x + Math.random() * 1000 - 500, y: center.y + Math.random() * 1000 - 500}
    // circle.moveX = Math.random() * 6 - 3
    // circle.moveY = Math.random() * -15
    // circle.endFill()
    //
    // circles.push(circle)
    // pixiApp.stage.addChild(circle)
}

pixiApp.ticker.speed = 0.3
pixiApp.ticker.add((delta) => {
    animate(delta)
})

const animate = (delta) => {
    for (let i = 0; i < circles.length; i++) {
        circle = circles[i]
        circle.position.x += circle.moveX * delta
        circle.position.y += circle.moveY * delta
        circle.alpha -= 0.01
        if (circle.alpha < 0) {
            circle.alpha = Math.random()
            circle.position = {
                x: center.x + Math.random() * 1000 - 500,
                y: center.y + Math.random() * 1000 - 500
            }
        }
    }
    pixiApp.renderer.render(pixiApp.stage)

    //今回はpixi.jsのtickerで毎フレーム呼び出す
    // setTimeout(() => {
    //     requestAnimationFrame(this.animate)
    // }, 1000 / 50)
}

export {
    pixiApp,
}