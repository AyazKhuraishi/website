require('colors')
const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractCSSWebpackPlugin = require('mini-css-extract-plugin')
const OptimizeCSSWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const PurgeCSSWebpackPlugin = require('purgecss-webpack-plugin')
const OptimizeJSWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const ErrorOverlayWebpackPlugin = require('error-overlay-webpack-plugin')

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
  sourceMap: true
})

const CSSOptimizerConfig = new OptimizeCSSWebpackPlugin({})

const CSSPurgerConfig = new PurgeCSSWebpackPlugin({
  paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
  whitelistPatterns: [
    /cil-|cib-|cif-/,
    /flag-icon/
  ]
})

const ProgressBarConfig = new ProgressBarPlugin({
  format: `${':msg'.cyan} [:bar] ${':percent'.green} (${':elapsed'.green} seconds)`,
  clear: false
})

const EnvironmentConfig = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production')
  }
})

const devPlugins = [
  HTMLInjecterConfig,
  CSSExtracterConfig,
  new ErrorOverlayWebpackPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin()
]

const prodPlugins = [
  HTMLInjecterConfig,
  CSSExtracterConfig,
  CSSPurgerConfig,
  EnvironmentConfig
]

// If clean build is desired, add CleanWebpackPlugin
if (process.argv.indexOf('-c') !== -1) prodPlugins.push(new CleanWebpackPlugin())

// If in CI, don't output progress to stdout to reduce log clutter
if (!process.env.CI) prodPlugins.push(ProgressBarConfig)

const createAlias = modulePath => path.resolve(__dirname, modulePath)

// Webpack config
module.exports = {
  // Development server
  devServer: {
    host: 'localhost',
    port: 8000,
    hot: true,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*' // Allow CORS
    }
  },

  // Production optimisers
  optimization: {
    minimizer: dev ? [] : [JSOptimizerConfig, CSSOptimizerConfig],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.s?css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
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
        test: /\.s?css$/,
        use: [
          dev ? 'style-loader' : ExtractCSSWebpackPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      { // Images
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      { // SVGs
        test: /\.svg$/,
        use: [
          { loader: 'file-loader' },
          { loader: 'svgo-loader' }
        ]
      },
      { // Fonts
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
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
      sections: createAlias('src/components/sections'),
      lang: createAlias('src/lang')
    }
  },

  // Production build
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/build')
  },

  mode: dev ? 'development' : 'production',
  plugins: dev ? devPlugins : prodPlugins
}
