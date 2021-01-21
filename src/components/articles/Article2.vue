<template v-slot:page2>
  <article class="article-inner">
    <div class="article-container">
      <h3 class="headline">Creator Profile</h3>
      <div class="img-container">
        <img
          src="./img/my_icon.png"
          alt="leveldrain"
          width="170em"
        >
      </div>

      <div class="icon-container">
        <a href="mailto:drain2291@gmail.com">
          <font-awesome-icon
            class="fa-icon"
            :icon="['far','envelope']"
          />
        </a>
        <a
          href="https://twitter.com/level_ueshima"
          target="_blank"
        >
          <font-awesome-icon
            class="fa-icon"
            :icon="['fab','twitter-square']"
          />
        </a>
        <a
          href="https://www.facebook.com/darkmatter77"
          target="_blank"
        >
          <font-awesome-icon
            class="fa-icon"
            :icon="['fab','facebook-square']"
          />
        </a>
        <a
          href="https://github.com/LevelDrain/portfolio_v2"
          target="_blank"
        >
          <font-awesome-icon
            class="fa-icon"
            :icon="['fab','github-square']"
          />
        </a>
      </div>

      <p>
        活動名 上島水準（うえしまレベル）。<br>
        アダルト系ソーシャルゲームのディレクターからフロントエンドに強いエンジニアになる。<br>
        本名は全国70人程度のレア苗字であり、上島ではない。
      </p>
      <p>
        ソシャゲプランナーおよびレベルデザイナーのバックグラウンドと、エンジニアのスキルを持つ。<br>
        趣味としての目標はCGクリエイター。
      </p>
      <p>
        大学院修了後、ソーシャルゲームに携わった際に、手作業によるパラメータ調整、ライターが書いたキャラクターのセリフのデータ化、
        お知らせ用ランディングページの作成など、膨大な工数の作業が発生していましたが、3日という短納期に間に合わせるため、
        Excelにて自主的に効率化しておりました（レベルデザイナーと社内SEを兼ねた立場）。<br>
        その際に、PHPやJavaScriptの知識があればよりツールにできると考え、全財産を投入し専門学校への入学を決めた経緯があります。
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
import "./styles_article.css";

export default {
  name: "Article2"
};
</script>