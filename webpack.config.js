require('colors')
const path = require('path')
const glob = require('glob')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractCSSWebpackPlugin = require('mini-css-extract-plugin')
const OptimizeCSSWebpackPlugin = require('css-minimizer-webpack-plugin')
const PurgeCSSWebpackPlugin = require('purgecss-webpack-plugin')
const OptimizeJSWebpackPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')

const dev = process.env.NODE_ENV !== 'production'

const HTMLInjecterConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body'
})

const CSSExtracterConfig = new ExtractCSSWebpackPlugin({
  filename: dev ? '[name].css' : '[name].[fullhash].css',
  chunkFilename: dev ? '[id].css' : '[id].[fullhash].css'
})

const JSOptimizerConfig = new OptimizeJSWebpackPlugin({})

const CSSOptimizerConfig = new OptimizeCSSWebpackPlugin({})

const CSSPurgerConfig = new PurgeCSSWebpackPlugin({
  paths: glob.sync(`${path.join(__dirname, 'src')}/**/*`, { nodir: true }),
  safelist: {
    standard: [
      /cil-|cib-|cif-/,
      /flag-icon/,
      /vertical-timeline/
    ]
  }
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

const sharedPlugins = [
  HTMLInjecterConfig,
  CSSExtracterConfig
]

const devPlugins = [
  new webpack.HotModuleReplacementPlugin()
]

const prodPlugins = [
  CSSPurgerConfig,
  EnvironmentConfig
]

// If clean build is desired, add CleanWebpackPlugin
if (process.env.CLEAN_BUILD) prodPlugins.push(new CleanWebpackPlugin())

// If in CI, don't output progress to stdout to reduce log clutter
if (!process.env.CI) prodPlugins.push(ProgressBarConfig)

const createAlias = modulePath => path.resolve(__dirname, modulePath)

// Webpack config
module.exports = {
  // Development server
  devServer: {
    host: 'localhost',
    port: 8000,
    open: true,
    headers: {
      'Access-Control-Allow-Origin': '*' // Allow CORS
    }
  },

  // Production optimisers
  optimization: {
    moduleIds: 'named',
    sideEffects: false,
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
        type: 'asset/inline'
      },
      { // SVGs
        test: /\.svg$/,
        type: 'asset/resource',
        use: [
          { loader: 'svgo-loader' }
        ]
      },
      { // Fonts
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource'
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
    },
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false
    }
  },

  // Production build
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '/build')
  },

  mode: dev ? 'development' : 'production',
  plugins: sharedPlugins.concat(dev ? devPlugins : prodPlugins)
}
