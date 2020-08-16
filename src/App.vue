<template>
  <div id="app">
    <div class="h-100 main-bg">
      <header id="Header" class="fixed-top">
        <HeaderBar/>
      </header>

      <BubbleEffect class="canvas-bg"/>
      <main id="Main" role="main">
        <router-view/>
      </main>
      <Loading/>

      <footer id="Footer" class="fixed-bottom">
        <FooterBar/>
      </footer>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import FooterBar from '@/components/FooterBar'
import BubbleEffect from '@/components/Bubble.vue'
import Loading from "@/components/Loading";

export default {
  name: 'App',
  components: {
    HeaderBar,
    FooterBar,
    BubbleEffect,
    Loading
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Roboto+Slab:wght@400;500&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
}

#Header {
  z-index: 200;
  font-family: 'Roboto Slab', serif;
}

.canvas-bg {
  z-index: -5;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

#Main {
  z-index: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  font-family: 'Fredericka the Great', cursive;
}

#Footer {
  z-index: 200;
  font-family: 'Roboto Slab', serif;
}

/* モバイルの背景 */
/* TODO:背景制作予定 */

.main-bg {
  z-index: -10;
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  background-image: url("./assets/img/jeremy-jozwik-braininjar.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #333333;
}

@media all and (min-width: 768px) {
  .main-bg {
    z-index: -10;
    position: fixed;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    background-image: url("./assets/img/jeremy-jozwik-braininjar.jpg");
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #333333;
  }
}
</style>
