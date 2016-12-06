import config from './common/config.babel';
import devServer from './common/webpack-dev-server.babel';

config.output.path = './dist';

export default {
  ...config,
  devServer,
};
