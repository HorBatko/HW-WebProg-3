const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { type } = require('os');

module.exports = {

  mode: 'development',
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',  // Куди Webpack покладе зображення
        },
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      },
     
    ],
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

    new HtmlWebpackPlugin({
      template: './src/pages/news.html', 
      filename: 'news.html', 
  }),

  new HtmlWebpackPlugin({
    template: './src/pages/photo.html', 
    filename: 'photo.html', 
}),
 new HtmlWebpackPlugin({
    template: './src/pages/rozklad.html', 
    filename: 'rozklad.html', 
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
