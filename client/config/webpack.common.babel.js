import path from 'path';
import autoprefixer from 'autoprefixer';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const include = [path.resolve(process.cwd(), './src')];

export default {
  entry: {
    app: './src/app.js'
  },

  output: {
    path: '../src/main/resources/static',
    filename: '[name].js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'ng15',
      favicon: './src/favicon.ico',
      template: 'src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
    })
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        include,
        loaders: [
          'ng-annotate',
          'babel'
        ],
        // exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css'
      },
      {
        test: /\.styl$/,
        include,
        loaders: [
          'style',
          'css?sourceMap',
          'stylus?sourceMap'
        ]
      },
      {
        test: /\.html$/,
        include,
        loader: 'raw'
      },
      {
        test: /\.hbs$/,
        include,
        loader: 'handlebars'
      },
      { // inline base64 URLs for <=1k images, direct URLs for the rest
        test: /\.(png|jpg)$/,
        loader: 'url?limit=1024'
      },
      { // helps to load bootstrap's css.
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=1024&minetype=application/font-woff'
      },
      {
        test: /\.woff2$/,
        loader: 'url?limit=1024&minetype=application/font-woff'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=1024&minetype=application/octet-stream'
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=1024&minetype=image/svg+xml'
      }
    ]
  },

  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],

  node:{
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  // devtool: '#cheap-module-inline-source-map',
  devtool: 'eval-source-map'
}
