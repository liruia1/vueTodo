const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const Merge = require('webpack-merge')
const ExtractPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.config.base')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const isDev = process.env.NODE_ENV === 'development'

const devServer = {
  port: 8080,
  // contentBase: path.join(__dirname, '../dist'),
  overlay: {
    errors: true
  },
  hot: true,
}
const defaultPlugin = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV:  '"development"'  
    }
  }),
  new HtmlPlugin({
    template:path.join(__dirname,'template.html')
  }),
  new VueLoaderPlugin()
]
let config

config = Merge(baseConfig, {
  devtool: '#cheap-module-eval-source-map',
  entry:path.join(__dirname,'../practice/index.js'),
  module: {
    rules: [{
      test: /\.styl$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    },
    {
      test: /\.css$/,
      use: ['style-loader','css-loader']
    },]
  },
  devServer,
  resolve:{
    alias:{
      'vue':path.join(__dirname,'../node_modules/vue/dist/vue.esm.js')
    }
  },
  plugins: defaultPlugin.concat([
    new webpack.HotModuleReplacementPlugin(),
  ])
})
module.exports = config