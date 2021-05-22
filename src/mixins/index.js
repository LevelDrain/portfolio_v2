/* ミックスイン … グローバルで使用できるコンポーネントのようなもの */
/* ※ meta以外に使いまわす予定はないが、勉強のために設置したmixin */

export const setTitle = pathTitle => {
    const siteTitle = '水準研究所'
    const pageTitle = !pathTitle ? siteTitle : pathTitle + ' | ' + siteTitle
    return window.document.title = pageTitle
}

//setAttributeにエラー
// export const setDescription = pathMeta => {
//     const defaultDescription = '';
//     const description = pathMeta ? pathMeta : defaultDescription;
//     document
//         .querySelector("meta[name='description']")
//         .setAttribute('content', description);
// }