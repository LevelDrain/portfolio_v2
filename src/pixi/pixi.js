import * as PIXI from 'pixi.js'

const pixiApp = new PIXI.Application({width: 900, height: 300, transparent: true})

//背景透過
const backgroundAlpha = 0
const background = new PIXI.Graphics()
background.beginFill(0x000000, backgroundAlpha)
background.drawRect(0, 0, pixiApp.renderer.screen.width, pixiApp.renderer.screen.height)
background.endFill()
pixiApp.stage.addChild(background)

//アニメーション部分
const totalCircle = 50, center = {x: pixiApp.renderer.screen.width / 2, y: pixiApp.renderer.screen.height}
let circles = []
while (circles.length < totalCircle) {
    let circle = new PIXI.Graphics()
    let scale = Math.random() * 10 + 1
    circle.beginFill(0Xffffff)
    circle.arc(0, 0, scale, 0, Math.PI * 2)
    circle.alpha = Math.random()
    circle.position = {x: center.x + Math.random() * 200 - 100, y: center.y}
    circle.moveX = Math.random() * 6 - 3
    circle.moveY = Math.random() * -15
    circle.endFill()

    circles.push(circle)
    pixiApp.stage.addChild(circle)
}

export {
    pixiApp,
    circles,
    center
}