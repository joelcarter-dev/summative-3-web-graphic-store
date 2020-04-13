const GoogleFontsPlugin = require('google-fonts-webpack-plugin')

module.exports = {
  module: {
    rules: [
      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
    plugins: [
      new GoogleFontsPlugin({
        fonts: [
          // add your fonts, like
          // { family: "Source Sans Pro" },
        
        ]
      })
    ]
}