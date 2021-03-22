const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  
  mode: 'development',
  entry: ['./src/js/index.js', './src/css/style.scss'],
  devServer: {
    contentBase: [path.resolve(__dirname, 'build'), ],
    hot: true,
    open: true,
    port: 8080,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: 'html-loader',
      },
      {

        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      {
        test: /\.(sass|scss)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', ]
      },

    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'lucila lico portfolio',
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'about',
      template: path.resolve(__dirname, './src/about.html'),
      filename: 'about.html'
    }),
    new HtmlWebpackPlugin({
      title: 'contact',
      template: path.resolve(__dirname, './src/contact.html'),
      filename: 'contact.html'
    }),
    new HtmlWebpackPlugin({
      title: 'one',
      template: path.resolve(__dirname, './src/one.html'),
      filename: 'one.html'
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'assets/[name].js',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
}