<template v-slot:page3>
  <article class="article-inner">
    <div class="article-container">
      <h3 class="headline">
        About This Portfolio
      </h3>
      <p>
        本ポートフォリオはVue.js+Pixi.jsにより制作されており、SVGアニメーションも併せて実装しているため<br>
        処理負荷を軽減する工夫をしている。
      </p>

      <h4 class="headline-lv2">
        1. 処理負荷軽減のひと工夫
      </h4>
      <p>
        実は裏では配列に格納した80個の泡画像を常に上下させている。<br>
        したがって、不要なアニメーションはオフにしておく方が処理落ちを防ぐことができると考えている。<br>
        モーダルを開いて文章を読む際、泡アニメーションやSVGアニメーションはぶっちゃけ不要である。
        そこで、モーダルを開く度に背景のアニメーションを全てオフにする処理をstoreを介して実装した。
      </p>
      <p> 下記画像の矢印はモーダルを開くイベントである。処理の量を表すバーが半分程度に減るのが分かる。</p>
      <div class="img-container">
        <img
          src="./img/img_performance.png"
          alt=""
          class="img-detail">
      </div>

      <h4 class="headline-lv2">
        2. モーダル背景のすりガラス
      </h4>
      <p>
        1の通り、モーダル展開中は背景のアニメーションを全て止めている。<br>
        しかしながら、開いた瞬間パッと止まったら一見バグのように見えて印象が悪かった。
      </p>
      <div class="img-container">
        <img
          src="./img/img_no_blr.jpg"
          alt=""
          class="img-detail">
      </div>
      <p>
        そのため、あまり背景の挙動が気にならないよう「すりガラス効果」を入れた。<br>
        ※ 現在、firefoxではblurが効かないことを確認済み。修正予定。
      </p>
      <div class="img-container">
        <img
          src="./img/img_on_blr.jpg"
          alt=""
          class="img-detail">
      </div>

      <h4 class="headline-lv2">
        3. 生成画像の破棄
      </h4>
      <p>Pixi.jsを実装しているコンポーネントが破棄された際、生成された泡を全てdestroyedで破棄している。</p>

      <h4 class="headline-lv2">
        4. モーダルのルーティング
      </h4>
      <p>
        各ページがコンポーネントなので、実は親URLはhome一つしかない。<br>
        Vue Routerでchildrenによって各記事のコンポーネントとURLを紐づけている。<br>
      </p><p>
        routerからstoreのモーダル開閉を制御する変数にアクセスすることで、<br>
        モーダルを開くと共にURLを変更し、あたかもページが数ページあるように見せている。
      </p>
      <div class="img-container">
        <img
          src="./img/img_routing.jpg"
          alt=""
          class="img-detail">
      </div>
      <p>閉じるボタンやブラウザの戻るボタンでホームのURLに戻り、状態をリセットするようにしている。</p>

      <h3 class="headline">
        Art Concept
      </h3>
      <p>
        水槽の脳（すいそうののう、Brain in a vat）とは、<br>
        「自分が体験しているこの世界は、実は水槽に浮かんだ脳が見ているバーチャルリアリティなのではないか」<br>
        という懐疑主義的な思考実験(<a
          href="https://w.atwiki.jp/p_mind/pages/35.html"
          target="_blank">心の哲学まとめwiki</a>)。
      </p>
    </div>
  </article>
</template>

<script>
import './styles_article.css'

export default {
  name: 'Article3',
}
</script>