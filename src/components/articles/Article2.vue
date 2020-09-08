<template v-slot:page2>
  <article class="article-inner">
    <div class="article-container">
      <h3 class="headline">Creator Profile</h3>
      <div class="img-container">
        <img src="./img/my_icon.png" alt="leveldrain" width="170em">
      </div>
      <p>元フロントエンドエンジニア上島の弟子。<br>
        活動名 Level Drain、本名「佐村木 友紀（Yuki Samuraki）」。<br>
        アダルト系ゲームのレベルデザイナーからフロントエンドエンジニアになる。
      </p>
      <p>
        <a href="https://twitter.com/to_next_level" target="_blank">Twitter</a><br>
        <a href="mailto:drain2291@gmail.com">drain2291@gmail.com</a>
      </p>
      <p>佐村木は全国70人程度のレア苗字。
        <ruby>職人
          <rt>アルティザン</rt>
        </ruby>
        の家系。<br>
        脳科学者に憧れバイオ研究者になるが、実験が下手すぎてデータ分析に回る。<br>
        元より攻殻機動隊やゼルダの伝説に憧れていたため、大学院修了後はソシャゲ運営会社に就職。<br>
        ゲームのキャラで言えば「熱血な騎士」か「正直で素直な村人」ポジション。猫派。
      </p>

      <h3 class="headline">Philosophy</h3>
      <p>制作ポリシーとしては信頼関係をまず重視します。<br>
        技術面のスキルより、結局のところ社会スキルの比重が大きいと様々な挫折から学んだためです。</p>

      <h4 class="headline-lv2">ささやかな気配り</h4>
      <p>「ありがとう」「ごめんなさい」は自然に言うよう心がける。<br>
        当たり前ですが、昨今はできていない人をよく見ます。<br>
        褒め言葉は意識的に増やすようにしております（相手の良い点を見るきっかけになるため）。</p>

      <h4 class="headline-lv2">細かい作業を疎かにしない</h4>
      <p>スマホでレイアウトが想定されたものかどうか、safariでくずれないか（高さを指定しないとくずれます）など、<br>
        面倒だなと思われがちな細々したチェックや修正も大切にします。<br>
        仕上がりは依頼されたクオリティの +α を目指します（納期との相談ではありますが）。</p>

      <h4 class="headline-lv2">楽しもうという姿勢</h4>
      <p>何よりも仕事に誇りを持って取り組めるかどうか。楽しければ更にヨシ。<br>
        ネガティブな気持ちを持ちながら作業をしても成果は上がらず、<br>
        逆に誇りを持って仕事をしているときは、周囲も依頼者も本人も良い流れで動いているため。<br>
        あまり得意ではないものの、楽しみを見つけるよう心がけています。
      </p>

      <h3 class="headline">Career</h3>

      <!-- TODO:Vue.jsの良さが出てないので、mixinか何かでテンプレ作ってレスポンシブ対応 -->
      <div class="row justify-content-center">
        <div class="col-11">
          <table class="career-table pc-show">
            <tr>
              <th>2009年</th>
              <td>脳科学者になりたいと思い、長浜バイオ大学に入学。<br>
                在学中に統計学や生命情報科学、3DCGに興味を持つ。実験に挫折。
              </td>
            </tr>
            <tr>
              <th>2013年</th>
              <td>奈良先端科学技術大学院大学で生命情報科学の研究室に入る。<br>
                実験データのデータ解析を行う。
              </td>
            </tr>
            <tr>
              <th>2015年</th>
              <td>アミューズメント系企業に入社。データ分析の経験から、ソーシャルゲームのパラメータ調整を行う。<br>
                GUIの設計やWebページ分析業務、ディレクション等を行っていた。
              </td>
            </tr>
            <tr>
              <th>2017年</th>
              <td>制作の方に進むべく全財産を投資し、京都コンピュータ学院に入学。</td>
            </tr>
            <tr>
              <th>2020年</th>
              <td>ベンチャーSIer のWeb開発者としてアシスタントからスタート。</td>
            </tr>
          </table>

          <!-- スマホ用 -->
          <table class="career-table sp-show">
            <tr>
              <th>2009年</th>
            </tr>
            <tr>
              <td>脳科学者になりたいと思い、長浜バイオ大学に入学。<br>
                在学中に統計学や生命情報科学、3DCGに興味を持つ。実験に挫折。
              </td>
            <tr>
              <th>2013年</th>
            </tr>
            <tr>
              <td>奈良先端科学技術大学院大学で生命情報科学の研究室に入る。<br>
                実験データのデータ解析を行う。
              </td>
            </tr>
            <tr>
              <th>2015年</th>
            </tr>
            <tr>
              <td>アミューズメント系企業に入社。データ分析の経験から、ソーシャルゲームのパラメータ調整を行う。<br>
                GUIの設計やWebページ分析業務、ディレクション等を行っていた。
              </td>
            </tr>
            <tr>
              <th>2017年</th>
            </tr>
            <tr>
              <td>制作の方に進むべく全財産を投資し、京都コンピュータ学院に入学。</td>
            </tr>
            <tr>
              <th>2020年</th>
            </tr>
            <tr>
              <td>ベンチャーSIer のWeb開発者としてアシスタントからスタート。</td>
            </tr>
          </table>
        </div>
      </div>

    </div>
  </article>
</template>

<script>
import './styles_article.css'

export default {
  name: "Article2",
}
</script>