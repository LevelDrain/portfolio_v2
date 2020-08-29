<template>
  <div class="container-fluid">
    <Modal v-show="this.$store.state.showSection" :articleID="articleID"/>
    <div class="main-menu">
      <div class="main-menu-inner">
        <!-- 本文枠 -->
        <div class="main-menu-content">
          <div class="main-menu-front pc-hide">
            <ul>
              <li class="button" @click="open('article1')">
                <span class="btn-accessory">LEVEL1</span>Skills & Works
              </li>
              <li class="button" @click="open('article2')">
                <span class="btn-accessory">LEVEL2</span>Creator Profile
              </li>
              <li class="button">
                <span class="btn-accessory">LEVEL3</span>About My Portfolio
              </li>
              <li class="button">
                <span class="btn-accessory">LEVEL4</span>上島様名言集
              </li>
            </ul>
          </div>

          <div class="main-menu-front sp-hide">
            <ul>
              <li class="button" @click="open('article1')">
                <span class="btn-accessory">LEVEL1</span><br>Skills & Works
              </li>
              <li class="button" @click="open('article2')">
                <span class="btn-accessory">LEVEL2</span><br>Creator Profile
              </li>
              <li class="button">
                <span class="btn-accessory">LEVEL3</span><br>About My Portfolio
              </li>
              <li class="button">
                <span class="btn-accessory">LEVEL4</span><br>上島様名言集
              </li>
            </ul>
          </div>

          <div class="main-menu-back">
            <p class="btn-accessory">We might be actually a brain hooked up to a computer program that can perfectly
              simulate experiences
              of the outside world. </p>
            <p class="btn-accessory">…… So I wanna be an ARTISAN for human brains.</p>
          </div>
        </div>
        <!-- //本文枠 -->
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  name: 'Home',
  components: {
    Modal,
  },
  data() {
    return {
      showSection: this.$store.state.showSection,
      articleID: ''
    }
  },
  created() {
    if (this.$route.path === '/') {
      this.$store.state.inWork = true
      this.$store.state.inHome = false
    }
  },
  methods: {
    open(id) {
      this.$store.commit('openSection')
      this.articleID = id
    },
  }
}
</script>

<style scoped>
/*
* Prefixed by https://autoprefixer.github.io
* PostCSS: v7.0.29,
* Autoprefixer: v9.7.6
* Browsers: last 4 version
*/

.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;
  /*background: #333333;*/
}

.main-menu-inner {
  position: fixed;
  top: 10%;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: start;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: start;
  width: 100%;
  min-height: 500px;
  height: 90vh;
  /*background: #333333;*/
}

.main-menu-inner li {
  list-style: none;
}

/* メニューの位置調整 */
.main-menu-inner {
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 10% 5%;
}

@media all and (min-width: 768px) {
  .main-menu-inner {
    padding: 5%;
  }
}

.button {
  position: relative;
  padding: 1em 1.5em;
  border: none;
  background: rgba(13, 40, 46, .6);
  cursor: pointer;
  outline: none;
  margin: 1em .8em;
}

.button::after,
.button::before {
  content: '';
  display: block;
  position: absolute;
  width: 20%;
  height: 20%;
  border: .1em solid;
  -webkit-transition: all .6s ease;
  -o-transition: all .6s ease;
  transition: all .6s ease;
}

.button::after {
  bottom: 0;
  right: 0;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: #6ec9e8;
  border-right-color: #6ec9e8;
}

.button::before {
  top: 0;
  left: 0;
  border-top-color: #6ec9e8;
  border-left-color: #6ec9e8;
  border-bottom-color: transparent;
  border-right-color: transparent;
}

.button:hover:after,
.button:hover:before {
  border-bottom-color: #6ec9e8;
  border-right-color: #6ec9e8;
  border-top-color: #6ec9e8;
  border-left-color: #6ec9e8;
  width: 100%;
  height: 100%;
}

@-webkit-keyframes button-animation {
  100% {
    border-bottom-color: #6ec9e8;
    border-right-color: #6ec9e8;
    border-top-color: #6ec9e8;
    border-left-color: #6ec9e8;
    width: 100%;
    height: 100%;
  }
}

@keyframes button-animation {
  100% {
    border-bottom-color: #6ec9e8;
    border-right-color: #6ec9e8;
    border-top-color: #6ec9e8;
    border-left-color: #6ec9e8;
    width: 100%;
    height: 100%;
  }
}

.btn-accessory {
  color: #6ec9e8;
  padding-right: 2em;
  -webkit-filter: drop-shadow(0 0 0.5em rgba(110, 201, 232, .8));
  filter: drop-shadow(0 0 0.5em rgba(110, 201, 232, .8));
}

.main-menu-content {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  /*background: #333333;*/
}

/* コンテンツ */
.main-menu-back {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 90%;
  padding: 3em;
  margin: 3em 0;
  color: rgba(110, 201, 232, .6);
  background: rgba(13, 40, 46, .5);
  -webkit-box-shadow: 0 0 8px 3px #6ec9e8 inset;
  box-shadow: 0 0 8px 3px #6ec9e8 inset;
}

.main-menu-front {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  text-align: left;
  width: 90%;
  padding: 1em;
  background: rgba(13, 40, 46, .5);
  -webkit-box-shadow: 0 0 8px 3px #6ec9e8 inset;
  box-shadow: 0 0 8px 3px #6ec9e8 inset;
}

.main-menu-front ul {
  -webkit-padding-start: 0;
  padding-inline-start: 0;
}

.pc-hide {
  display: none;
}

@media all and (min-width: 769px) {
  .main-menu-back {
    z-index: 5;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30em;
  }

  .main-menu-front {
    z-index: 10;
    position: absolute;
    top: 0;
    left: 5%;
    display: block;
    width: 30em;
    background: rgba(13, 40, 46, .5);
    -webkit-box-shadow: 0 0 8px 3px #6ec9e8 inset;
    box-shadow: 0 0 8px 3px #6ec9e8 inset;
  }

  .main-menu-front ul {
    -webkit-padding-start: 0;
    padding-inline-start: 0;
  }

  .sp-hide {
    display: none;
  }
}
</style>