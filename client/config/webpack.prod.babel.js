import config from './webpack.common.babel';
import WebpackMd5Hash from 'webpack-md5-hash';

config.debug = false;
config.devtool = 'source-map';
config.output.sourceMapFilename = '[name].map';
config.plugins = [
  ...config.plugins,
  new WebpackMd5Hash()
];

export default config;
