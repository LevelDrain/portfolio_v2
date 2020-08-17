const page1 = {
    namespaced: true,
    state: {
        title: 'スキルについて',
        description1: 'JS/PHP/Vue.js/Laravel/Webディレクション',
        description2: null,
        description3: null,
    }
}

const page2 = {
    namespaced: true,
    state: {
        title: '自己紹介',
        description1: '<img :src="'+'require("../assets/img/logo.png")'+'">',
        description2: '花に例えると、<br>バラよりタンポポだと思います。',
        description3: '昭和っぽい素朴さを残した<br>平成生まれです。',
    }
}

const page3 = {
    namespaced: true,
    state: {
        title: '本ポートフォリオについて',
        description1: '上島宏史という謎の人物の教えをフロントエンド技術で実装したサイトです。<br>研究室は架空の物です。',
        description2: null,
        description3: null,
    }
}

export {
    page1,
    page2,
    page3
}