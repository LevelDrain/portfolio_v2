<template v-slot:page1>
  <article class="article-inner">
    <div class="article-container">
      <h3 class="headline">About Skills</h3>
      <p>主な開発言語は JavaScript / PHP。<br>
        得意さ：ディレクション = フロントエンド ＞ サーバサイド<br>
        Photoshop およびイラレは趣味程度。
      </p>

      <h3 class="headline">Web Direction</h3>
      <p>アダルト系ソーシャルゲームの真面目なディレクションを2年ほど行う。<br>
        レベルデザイン（ゲームのUX調整）、UIおよび広告サイトの仕様書などを手掛ける。
      </p>
      <p>※ レアリティに関わらずキャラ 1体 20万円くらいする話、乳首が出ているキャラは google に規制される話、<br>
        ぶっちゃけ「胸が大きくくびれが良いキャラ」は破格のステータスを持たせて低確率でガチャに入れる話などなど。<br>
        気になる方はご連絡ください。
      </p>

      <div class="container">
        <div class="row">
          <a href="https://www.slideshare.net/YukiSamuraki/ss-212325102" target="_blank"
             class="card-container col-md-6">
            <div class="card-origin mb-4 shadow">
              <img class="card-img-top thumbnail" src="./img_social_game.jpg" alt="">
              <div class="card-body">
                <div class="card-text">
                  <p>制作例<br>
                    ソシャゲの UX について（LT登壇）</p>
                </div>
              </div>
            </div>
          </a>

          <a href="https://leveldrain.sumomo.ne.jp/Portfolio/FEIF_calc.xlsx" class="card-container col-md-6">
            <div class="card-origin mb-4 shadow">
              <img class="card-img-top thumbnail" src="./img_level_design.jpg" alt="">
              <div class="card-body">
                <div class="card-text">
                  <p>制作例<br>
                    自作レベルデザインツール（Excel）</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

      <h3 class="headline">Frontend</h3>
      <p>JavaScript / Vue.js / jQuery / Pixi.js, Three.jsなどのWebGL系ライブラリ<br>
        Sassやbootstrapを使用した開発経験もあるが、CSSの方が個人的に好み。
      </p>
      <p>業務で使用しているのは主に Laravel 環境内の Vue.js であり、axiosなどのAPI連携まで実装経験がある。</p>
      <p>- Three.js による開発は特に燃える。</p>

      <div class="container">
        <div class="row">
          <a href="https://leveldrain.sumomo.ne.jp/WebEffectGenerator/geostorm.html" target="_blank"
             class="card-container col-md-6">
            <div class="card-origin mb-4 shadow">
              <img class="card-img-top thumbnail" src="./img_work_geostorm.jpg" alt="">
              <div class="card-body">
                <div class="card-text">
                  <p>制作例<br>
                    厨二エフェクトジェネレーター</p>
                </div>
              </div>
            </div>
          </a>

          <router-link to="/" class="card-container col-md-6">
            <div class="card-origin mb-4 shadow">
              <img class="card-img-top thumbnail" src="./img_portfolio2.jpg" alt="">
              <div class="card-body">
                <div class="card-text">
                  <p>制作例<br>
                    上島研究所（本サイト）</p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <h3 class="headline">Serverside</h3>
      <p>Blade に Vue.js を突っ込んだり、CRUD の実装をしたりする。<br>
        生の PHP の経験は学生時代からあり、Laravel より若干長い。</p>

      <div class="container">
        <div class="row">
          <a href="https://leveldrain.sumomo.ne.jp/beginnernovels/" target="_blank"
             class="card-container col-md-6">
            <div class="card-origin mb-4 shadow">
              <img class="card-img-top thumbnail" src="./img_visual_novel.jpg" alt="">
              <div class="card-body">
                <div class="card-text">
                  <p>制作例<br>
                    Webビジュアルノベルツール</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

    </div>
  </article>
</template>

<script>
import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles_article.css'

export default {
  name: "Article1",
}
</script>