<template>
  <div id="app">
    <div class="container h-100">
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
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  font-family: 'Fredericka the Great', cursive;
}

#Footer {
  font-family: 'Roboto Slab', serif;
}

/* モバイルの背景 */
/* TODO:背景制作予定 */

#Main {
  background-image: url("./assets/img/jeremy-jozwik-braininjar.jpg");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #333333;
}

@media all and (min-width: 768px) {
  #Main {
    background-image: url("./assets/img/jeremy-jozwik-braininjar.jpg");
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-color: #333333;
  }
}
</style>
