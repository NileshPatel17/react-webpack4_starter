const paths = require('./paths');
const publicPath = paths.servedPath;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

var packageJson = require(paths.appPackageJson);

module.exports = {
  name: 'client',
  target: 'web',
  entry: './src/index.jsx',
  output: {
    path: paths.appBuild,
    publicPath: publicPath,
    filename: `static/js/main-[hash]-v${packageJson.version}.js`
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { test: /\.css$/, use: 'css-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
    // Clean webpack
    // new CleanWebpackPlugin([paths.appBuild])
  ]
};
