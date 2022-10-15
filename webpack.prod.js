const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { DefinePlugin } = require('webpack')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]'
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/media'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              outputPath: 'static/media'
            }
          }
        ]
      }
    ]
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    // 'react-router-dom': 'ReactRouterDOM',
    axios: 'axios'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.prod.html'
    }),
    new MiniCssExtractPlugin({
      filename: './static/css/main-bundle-[fullhash].css'
    }),
    new FaviconsWebpackPlugin({
      logo: './public/favicon.svg',
      inject: true,
      prefix: 'static/media/icons'
    }),
    new DefinePlugin({
      'process.env.API_URL': JSON.stringify('https://espaco-de-conhecimento-backend.herokuapp.com/api')
    })
  ]
})
