const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssRules = {test: /\.css$/,use: [{ loader: 'style-loader' },{loader: 'css-loader',options: {modules: true,},},],};
const imgRules = {test: /\.(png|svg|jpg|jpeg|gif)$/i,type: 'asset/resource',};

module.exports = {
  mode: 'development',
  module: {
    rules: [
      cssRules,
      imgRules
    ],
  },
  entry: {
    main: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: true,
    //overlay: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './src/index.html'
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: false,
  },
 optimization: {
   runtimeChunk: 'single',
 },
};