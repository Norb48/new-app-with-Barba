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
     new HtmlWebpackPlugin({
      title: 'two',
      template: path.resolve(__dirname, './src/two.html'),
      filename: 'two.html'
    }),
    new HtmlWebpackPlugin({
      title: 'tree',
      template: path.resolve(__dirname, './src/tree.html'),
      filename: 'tree.html'
    }),
    new HtmlWebpackPlugin({
      title: 'four',
      template: path.resolve(__dirname, './src/four.html'),
      filename: 'four.html'
    }),
    new HtmlWebpackPlugin({
      title: 'five',
      template: path.resolve(__dirname, './src/five.html'),
      filename: 'five.html'
    }),
    new HtmlWebpackPlugin({
      title: 'six',
      template: path.resolve(__dirname, './src/six.html'),
      filename: 'six.html'
    }),
    new HtmlWebpackPlugin({
      title: 'seven',
      template: path.resolve(__dirname, './src/seven.html'),
      filename: 'seven.html'
    }),
    new HtmlWebpackPlugin({
      title: 'eight',
      template: path.resolve(__dirname, './src/eight.html'),
      filename: 'eight.html'
    }),
    new HtmlWebpackPlugin({
      title: 'nine',
      template: path.resolve(__dirname, './src/nine.html'),
      filename: 'nine.html'
    }),
    new HtmlWebpackPlugin({
      title: 'ten',
      template: path.resolve(__dirname, './src/ten.html'),
      filename: 'ten.html'
    }),
    new HtmlWebpackPlugin({
      title: 'eleven',
      template: path.resolve(__dirname, './src/eleven.html'),
      filename: 'eleven.html'
    }),
    new HtmlWebpackPlugin({
      title: 'twelve',
      template: path.resolve(__dirname, './src/twelve.html'),
      filename: 'twelve.html'
    }),

    new HtmlWebpackPlugin({
      title: 'thirteen',
      template: path.resolve(__dirname, './src/thirteen.html'),
      filename: 'thirteen.html'
    }),
    new HtmlWebpackPlugin({
      title: 'fourteen',
      template: path.resolve(__dirname, './src/fourteen.html'),
      filename: 'fourteen.html'
    }),
    new HtmlWebpackPlugin({
      title: 'mobile',
      template: path.resolve(__dirname, './src/mobile.html'),
      filename: 'mobile.html'
    }),

  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'assets/[name].js',
    assetModuleFilename: 'images/[hash][ext][query]'
  },
}
