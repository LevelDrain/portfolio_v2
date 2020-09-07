const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
    configureWebpack: () => {
        // プロダクトモードでのみ追加
        if (process.env.NODE_ENV === 'production') {
            return {
                plugins: [
                    // Prerender SPA Plugin を登録
                    new PrerenderSPAPlugin({
                        // 出力先 dist や www など
                        staticDir: path.join(__dirname, 'dist'),
                        // 生成したいページ
                        routes: ['/', '/article1', '/article2', '/article3', '/article4'],
                        postProcess(renderedRoute) {
                            const titles = {
                                '/': 'Home',
                                '/article1': 'Skills & Works',
                                '/article2': 'Creator Profile',
                                '/article3': 'About This Portfolio',
                                '/article4': '上島様名言集',
                            }
                            renderedRoute.html = renderedRoute.html.replace(
                                /<title>[^<]*<\/title>/i,
                                '<title>' + titles[renderedRoute.route] + '</title>'
                            )
                            return renderedRoute
                        }
                    })
                ]
            }
        }
    }
}