const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: './src/pages/about.html'
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Це замінює contentBase
    },
    compress: true,
    port: 9000,
  },  
};
