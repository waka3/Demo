const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: './js/index.js',
    public: './js/public.js',
    list: './js/list.js',
    details: './js/details.js'
  },
  output: {
    path: __dirname + '/build/',
    filename: './js/[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '首页',
      filename: 'index.html',
      template: './public/index.html',
      chunks: ['index', 'public']
    }),
    new HtmlWebpackPlugin({
      title: '文章列表页',
      filename: 'list.html',
      template: './public/list.html',
      chunks: ['list', 'public']
    }),
    new HtmlWebpackPlugin({
      title: '文章详情页',
      filename: 'details.html',
      template: './public/details.html',
      chunks: ['details', 'public']
    })
  ]
}