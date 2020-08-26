<template>
  <div class="container-fluid">
    <Modal v-show="this.$store.state.showSection" :articleID="articleID"/>
    <div class="main-menu">
      <div class="main-menu-inner">
        <!-- 本文枠 -->
        <div class="main-menu-content">
          <div class="main-menu-back">
            <p>We might be actually a brain hooked up to a computer program that can perfectly simulate experiences
              of
              the
              outside world. </p>
            <p>…… So I wanna be an ARTISAN for human brains.</p>
          </div>

          <div class="main-menu-front pc-hide">
            <ul>
              <li class="button" @click="open('article1')">LEVEL1：スキルについて</li>
              <li class="button" @click="open('article2')">LEVEL2：自己紹介</li>
              <li class="button">LEVEL3：本ポートフォリオについて</li>
            </ul>
          </div>

          <div class="main-menu-front sp-hide">
            <ul>
              <li class="button" @click="open('article1')">LEVEL1：<br>スキルについて</li>
              <li class="button" @click="open('article2')">LEVEL2：<br>自己紹介</li>
              <li class="button">LEVEL3：<br>本ポートフォリオについて</li>
            </ul>
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
.main-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*background: #333333;*/
}

.main-menu-inner {
  position: fixed;
  top: 10%;
  transform: translateZ(0);

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 85vh;
  /*background: #333333;*/
}

.main-menu-inner li {
  list-style: none;
}

/* メニューの位置調整 */
.main-menu-inner {
  overflow-y: auto;
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

.main-menu-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /*background: #333333;*/
}

/* コンテンツ */
.main-menu-back {
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  padding: 3em;
  margin: 5em 0;
  color: rgba(110, 201, 232, .6);
  background: rgba(13, 40, 46, .5);
  box-shadow: 0px 0px 8px 3px #6ec9e8 inset;
}

.main-menu-front {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  width: 90%;
  padding: 1em;
  background: rgba(13, 40, 46, .5);
  box-shadow: 0px 0px 8px 3px #6ec9e8 inset;
}

.main-menu-front ul {
  padding-inline-start: 0;
}

.pc-hide {
  display: none;
}

@media all and (min-width: 769px) {
  .main-menu-back {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30em;
    padding: 3em;
    margin: 10em 0;
    color: rgba(110, 201, 232, .6);
    background: rgba(13, 40, 46, .5);
    box-shadow: 0px 0px 8px 3px #6ec9e8 inset;
  }

  .main-menu-front {
    position: absolute;
    top: 0;
    left: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    width: 30em;
    padding: 3em;
    background: rgba(13, 40, 46, .5);
    box-shadow: 0px 0px 8px 3px #6ec9e8 inset;
  }

  .main-menu-front ul {
    padding-inline-start: 0;
  }

  .sp-hide {
    display: none;
  }
}
</style>