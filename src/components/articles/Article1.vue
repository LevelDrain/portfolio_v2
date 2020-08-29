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
        気になる方はご連絡ください。30分UCC系珈琲一杯でプレゼンします（嘘です）。
      </p>

      <h3 class="headline">Frontend</h3>
      <p>JavaScript / Vue.js / jQuery / Pixi.js, Three.jsなどのWebGL系ライブラリ<br>
        Sassやbootstrapを使用した開発経験もあるが、CSSの方が個人的に好み。
      </p>
      <p>業務で使用しているのは主に Laravel 環境内の Vue.js であり、axiosなどのAPI連携まで実装経験がある。</p>
      <p>- Three.js による開発は特に燃える（本人談）。</p>
      <a href="https://leveldrain.sumomo.ne.jp/WebEffectGenerator/geostorm.html" target="_blank"
         class="card-container mt-2 mb-2">
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

      <h3 class="headline">Serverside</h3>
      <p>Blade に Vue.js を突っ込んだり、CRUD の実装をしたりする。<br>
        生の PHP の経験は学生時代からあり、Laravel より若干長い。</p>
      <p>次の目標として、Laravel に Python 突っ込んで統計解析なんかしてみたいなと思っている。</p>
      <a href="https://leveldrain.sumomo.ne.jp/beginnernovels/" target="_blank"
         class="card-container mt-2 mb-2">
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
  </article>
</template>

<script>
import './styles_article.css'

export default {
  name: "Article1",
}
</script>