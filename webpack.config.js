// npm i --save-dev webpack babel-core babel-loader babel-preset-react babel-preset-es2015
// for SCSS: npm i --save-dev node-sass sass-loader css-loader extract-text-webpack-plugin


var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: './src/index.js',
  output: {
    filename: './public/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./public/styles.css', {
      allChunks: true
    }),

    ////////// UNCOMMENT FOR PRODUCTION //////////

    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    // new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    // new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}),

  ]
};

module.exports = config;
