import config from './webpack.common.babel';

export default {
  ...config,
  devServer: {
    historyApiFallback: true,
    port: 8000,
    proxy: {
      "/api": "http://localhost:8080"
    }
  }
};
