<template>
  <div id="app">
    <header id="Header">
      <HeaderBar/>
    </header>
    <main id="Main" role="main">
      <router-view/>
    </main>
    <footer id="Footer">
      <FooterBar/>
    </footer>
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
  font-family: 'Fredericka the Great', cursive;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/img/jeremy-jozwik-braininjar.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

#Footer {
  font-family: 'Roboto Slab', serif;
}

@media all and (min-width: 768px) {
}

</style>
