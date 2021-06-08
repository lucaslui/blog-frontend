const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: './static/js/main-bundle-[fullhash].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss', 'gif', 'png'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
