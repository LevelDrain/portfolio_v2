<template v-slot:page1>
  <article class="article-inner">
    <div class="article-container">
      <h3 class="headline">
        Policy
      </h3>
      <p>
        3DCG、映像、画像などの視覚情報に特化したエンジニアを目指して、<br>
        フロントエンド関係やPython（画像処理）、blenderなど日夜勉強中。<br>
        『目に見えるもの』の課題解決に努めていきたい。
      </p>

      <h3 class="headline">
        About Skills
      </h3>
      <p>
        主な開発言語は JavaScript / PHP / (Java / Python)。<br>
        エンジニアの業務範囲の中でもグラフィック寄りのフロントエンドが得意（バックエンドを含むシステム開発も可能）。<br>
        クリエイティブディレクターを目指し、エンジニアとしてアーティストを応援したい。<br>
        開発困難になったプロジェクトのリバースエンジニアリングと修正、カスタマイズを行っていたことから、コード分析能力と問題解決には自信がある。
      </p>

      <h3 class="headline">
        Frontend
      </h3>
      <p>
        JavaScript / Vue.js (Vue Router, Vuexを含む) / jQuery<br>
        Sassやbootstrapを使用した開発経験もあるが、CSSの方が受託案件多め（メンテの都合）。<br>
        Pixi.js, Three.js などのWebGL系ライブラリには思い出がある。
      </p>
      <p>業務で使用していたのは主にLaravel環境内のVue.jsであり、axiosなどのAPI連携まで実装経験がある。</p>

      <div class="thumbnail-box">
        <a
          href="https://leveldrain.sumomo.ne.jp/WebEffectGenerator/geostorm.html"
          target="_blank"
          class="card-container"
        >
          <div class="card-origin">
            <img
              class="card-img-top thumbnail"
              src="./img/img_work_geostorm.jpg"
              alt=""
            >
            <div class="card-body">
              <div class="card-text">
                <p>JavaScript / Three.js<br>
                  厨二エフェクトジェネレーター</p>
              </div>
            </div>
          </div>
        </a>

        <router-link
          to="/"
          class="card-container"
        >
          <div class="card-origin">
            <img
              class="card-img-top thumbnail"
              src="./img/img_portfolio2.jpg"
              alt=""
            >
            <div class="card-body">
              <div class="card-text">
                <p>
                  Vue.js / Pixi.js<br>
                  上島研究所（本サイト）
                </p>
              </div>
            </div>
          </div>
        </router-link>
      </div>

      <h3 class="headline">
        Movies
      </h3>
      <p>
        BlenderとUE4で動画を作ったことがあります。<br>
        Unity勉強中。
      </p>

      <div class="thumbnail-box">
        <div class="card-origin">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/PbuMpEVKbFg"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="card-origin">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/DUcEZpyQgSo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>

      <h3 class="headline">
        Serverside
      </h3>
      <p>
        PHP / Laravel 経験あり。
      </p>

      <div class="thumbnail-box">
        <a
          href="https://leveldrain.sumomo.ne.jp/beginnernovels/"
          target="_blank"
          class="card-container"
        >
          <div class="card-origin">
            <img
              class="card-img-top thumbnail"
              src="./img/img_visual_novel.jpg"
              alt=""
            >
            <div class="card-body">
              <div class="card-text">
                <p>PHP<br>
                  Webビジュアルノベルツール</p>
              </div>
            </div>
          </div>
        </a>
      </div>

      <h3 class="headline">
        Planning
      </h3>
      <p>
        JavaScriptによる初作品。<br>
        コードはあまりキレイではないものの、仕様書は優れている。
      </p>

      <div class="thumbnail-box">
        <a
          href="https://leveldrain.sumomo.ne.jp/PokemonButtleJS/Specification.xlsx"
          class="card-container"
        >
          <div class="card-origin">
            <img
              class="card-img-top thumbnail"
              src="./img/img_pokemon_excel.jpg"
              alt=""
            >
            <div class="card-body">
              <div class="card-text">
                <p>Excel<br>
                  初代ポ〇モンバトル（仕様書）<br>
                  ※ クリックでExcelファイルをダウンロードできます
                </p>
              </div>
            </div>
          </div>
        </a>

        <a
          href="https://leveldrain.sumomo.ne.jp/PokemonButtleJS/"
          target="_blank"
          class="card-container"
        >
          <div class="card-origin">
            <img
              class="card-img-top thumbnail"
              src="./img/img_pokemon_js.jpg"
              alt=""
            >
            <div class="card-body">
              <div class="card-text">
                <p>JavaScript(ES5)<br>
                  初代ポ〇モンバトル（ゲーム本体）</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </article>
</template>

<script>
    import './styles_article.css'

    export default {
        name: 'Article1'
    }
</script>