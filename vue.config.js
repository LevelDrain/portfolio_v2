module.exports = {
  publicPath: './',
  pages: {
      index: {
          // entry for the page
          entry: 'src/main.js',
          // the source template
          template: 'public/index.html',
          // output as dist/index.html
          filename: 'index.html',
          // when using title option,
          // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
          title: '水準研究所',
          // chunks to include on this page, by default includes
          // extracted common chunks and vendor chunks.
          chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
      // when using the entry-only string format,
      // template is inferred to be `public/subpage.html`
      // and falls back to `public/index.html` if not found.
      // Output filename is inferred to be `subpage.html`.
      //subpage: this.$router.path

      //https://cli.vuejs.org/config/#publicpath
      //https://abierre.com/article/5b28fd48ef2031a4e3025daf
      //https://cli.vuejs.org/config/#lintonsave
  },
}