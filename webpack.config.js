const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { type } = require('os');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
  optimization: {
    minimize: true, // Минификация включена
    minimizer: [
      `...`,
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: false }, // Оставить комментарии
            },
          ],
        },
      }),
    ],
  },
  mode: 'production',
  entry: './src/index.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './',
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]',  
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
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.styl$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'stylus-loader'],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html'
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
new MiniCssExtractPlugin({
  filename: 'styles/[name].scss', // Помещаем стили в папку `styles`
}),
  ],

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), 
    },
    compress: true,
    port: 9000,
  },  
};
