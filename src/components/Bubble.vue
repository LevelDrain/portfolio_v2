<template>
  <div ref="canvas"/>
</template>

<script>
import * as threeObj from '@/assets/three/three'
import * as THREE from 'three'

export default {
  name: "Bubble",
  data() {
    return {
      scene: threeObj.scene,
      renderer: threeObj.renderer,
      camera: threeObj.camera,
      light: threeObj.light,
      loader: threeObj.loader,
      bubbles: [],
      bubble: null,
    }
  },
  created() {
    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshLambertMaterial({color: 0xf066aa});
    // const cube = new THREE.Mesh(geometry, material);
    // this.scene.add(cube);

    this.camera.position.set(0, 0, 2)
    this.light.position.set(1, 1, 1)
    this.light.intensity = 3
    this.scene.add(this.light);

    const totalBubble = 20
    const max = .5, min = max / 2
    while (this.bubbles.length < totalBubble) {
      this.bubble = new THREE.Mesh(
          new THREE.SphereGeometry(1, 32, 32),
          new THREE.MeshBasicMaterial({
            //map: this.loader.load('../assets/img/logo.png'),
            color: 0xffffff,
            transparent: true
          })
      )
      this.bubble.move = {
        x: Math.random() * max - min,
        y: Math.random() * max,
        z: Math.random() * max - min
      }
      this.bubble.position.y = -12
      this.bubble.position.x = 0
      this.bubble.position.z = 0
      this.bubble.material.opacity = Math.random()
      this.bubble.defPos = this.bubble.getWorldPosition()

      this.bubbles.push(this.bubble)
      this.scene.add(this.bubble)
    }
  },
  mounted() {
    this.$refs.canvas.appendChild(this.renderer.domElement)
    this.tick()
  },
  destroyed() {
    this.$refs,
        this.bubbles,
        this.scene,
        this.tick()
  },
  methods: {
    tick() {
      this.bubbles.forEach(obj => {
        let delta = 0.001;
        obj.position.x += obj.move.x;
        obj.position.y += obj.move.y;
        obj.position.z += obj.move.z;
        obj.material.opacity -= delta;

        if (obj.material.opacity <= 0) {
          obj.position.set(obj.defPos.x, obj.defPos.y, obj.defPos.z);
          obj.material.opacity = Math.random();
        }
      });

      this.renderer.render(this.scene, this.camera);
      requestAnimationFrame(this.tick);
    }
  }
}
</script>

<style scoped>

</style>