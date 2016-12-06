import {
  NoErrorsPlugin,
  ProvidePlugin,
  optimize,
} from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

import { vendors } from './entry.babel';
import { extractCSS } from './module.babel';

const {
  OccurenceOrderPlugin,
  CommonsChunkPlugin,
} = optimize;

export default [
  extractCSS,
  new OccurenceOrderPlugin(true),
  new CommonsChunkPlugin({
    name: vendors,
    filename: `${vendors}.js`,
    minChunks: Infinity,
  }),
  new NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    filename: 'index.html',
    favicon: './app/assets/favicon.ico',
    template: './app/assets/index.html',
    minify: {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true,
    },
  }),
  new ScriptExtHtmlWebpackPlugin({
    defaultAttribute: 'defer',
  }),
  new ProvidePlugin({
    jQuery: 'jquery',
    $: 'jquery',
    jquery: 'jquery',
  }),
];
