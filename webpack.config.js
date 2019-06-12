const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractCSSWebpackPlugin = require('mini-css-extract-plugin')
const OptimizeCSSWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const OptimizeJSWebpackPlugin = require('terser-webpack-plugin')

const dev = process.env.NODE_ENV !== 'production' || process.argv.indexOf('-p') === -1

const HTMLInjecterConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body'
})

const CSSExtracterConfig = new ExtractCSSWebpackPlugin({
  filename: dev ? '[name].css' : '[name].[hash].css',
  chunkFilename: dev ? '[id].css' : '[id].[hash].css'
})

const JSOptimizerConfig = new OptimizeJSWebpackPlugin({
  cache: true,
  parallel: true,
  sourceMap: true
})

const CSSOptimizerConfig = new OptimizeCSSWebpackPlugin({})

const EnvironmentConfig = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const createAlias = modulePath => path.resolve(__dirname, modulePath)

// Webpack config
module.exports = {
  // Development server
  devServer: {
    host: 'localhost',
    port: 8000,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*' // Allow CORS
    }
  },

  // Production optimisers
  optimization: {
    minimizer: dev ? [] : [ JSOptimizerConfig, CSSOptimizerConfig ]
  },

  // Entry point
  entry: [
    'react-hot-loader/webpack',
    path.join(__dirname, '/src/index.jsx')
  ],

  // Dummies for native Node modules not present in browser scope
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    crypto: 'empty'
  },

  // Loaders
  module: {
    rules: [
      { // JSX
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { // SCSS
        test: /\.scss$/,
        use: [
          dev ? 'style-loader' : ExtractCSSWebpackPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      { // Images
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'src/assets/fonts/'
        }
      },
      { // Exclusions
        exclude: [
          path.join(__dirname, '/src/config.js')
        ]
      }
    ]
  },

  // Extension and folder alias config
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
      // Internal shortcuts
      utils: createAlias('src/utils'),
      config: createAlias('src/config.js'),
      components: createAlias('src/components'),
      sections: createAlias('src/components/sections')
    }
  },

  // Production build
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/build')
  },

  mode: dev ? 'development' : 'production',
  plugins:
    dev ? [
      HTMLInjecterConfig,
      CSSExtracterConfig,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ] : [
      HTMLInjecterConfig,
      CSSExtracterConfig,
      EnvironmentConfig
    ]
}
