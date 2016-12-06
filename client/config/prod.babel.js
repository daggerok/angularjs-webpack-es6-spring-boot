import {
  optimize,
  DefinePlugin,
} from 'webpack';

import config from './common/config.babel';

const {
  UglifyJsPlugin,
  DedupePlugin,
} = optimize;

// config.debug = false;
// config.devtool = false;

config.plugins = [
  ...config.plugins,
  new DedupePlugin(),
  new UglifyJsPlugin({
    mangle: {
      keep_fnames: true,
    },
  }),
  new DefinePlugin({
    'process.env': { 'NODE_ENV': JSON.stringify('production') },
  }),
];

export default config;
