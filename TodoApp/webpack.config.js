const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

let appDir = path.resolve(__dirname, 'app/');
let buildDir = path.resolve(__dirname, 'wwwroot/dist/');

module.exports = {
  entry: {
    main: path.resolve(appDir, 'index.jsx')
  },
  output: {
    filename: 'bundle.js',
    path: buildDir,
    publicPath: '/dist/'
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(appDir, 'index.html')
  })],
  devtool: 'cheap-module-source-map',
  devServer: {
    historyApiFallback: true,
    contentBase: buildDir,
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
