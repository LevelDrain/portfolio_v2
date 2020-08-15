<template>
  <div id="app">
    <div class="h-100 main-bg">
      <header id="Header" class="fixed-top">
        <HeaderBar/>
      </header>
      <main id="Main" role="main">
        <router-view/>
      </main>
      <footer id="Footer" class="fixed-bottom">
        <FooterBar/>
      </footer>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Roboto+Slab:wght@400;500&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #fff;
}

#Header {
  font-family: 'Roboto Slab', serif;
}

#Main {
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
  font-family: 'Fredericka the Great', cursive;
  transform: translateZ(0);
  /*background: #333333;*/
}

#Footer {
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
