import path from 'path';
import ExtractPlugin from 'extract-text-webpack-plugin';

const exclude = /\/node_modules\//;
const assets = /\.(raw|gif|png|jpg|jpeg|otf|eot|woff|woff2|ttf|svg|ico)$/i;
const resolvePath = (rel) => path.resolve(process.cwd(), rel);
const resources = resolvePath('./app/assets');
const include = resolvePath('./app');

export const extractCSS = new ExtractPlugin('[name].css', { allChunks: true });

export default {
  preLoaders: [{
    include,
    test: /\.js$/i,
    loader: 'source-map',
  }],
  loaders: [
    {
      include,
      test: /\.js$/i,
      loaders: ['ng-annotate', 'babel?presets[]=es2015,presets[]=stage-0,plugins[]=add-module-exports'],
      // query: {
      //   presets: [
      //     'stage-0',
      //     'es2015',
      //   ],
      //   plugins: [
      //     'add-module-exports',
      //   ]
      // }
    },
    {
      include,
      loader: 'raw',
      test: /\.html$/i,
    },
    {
      test: /\.css$/i,
      include: [
        resolvePath('./node_modules/angular'),
        resolvePath('./node_modules/bootstrap/dist'),
        include,
      ],
      loader: extractCSS.extract('style', 'css?importloader=1&sourceMap', 'postcss'),
    },
    {
      include,
      test: /\.styl$/i,
      loader: extractCSS.extract('style', 'css!postcss!stylus?sourceMap'),
    },
    {
      include: exclude,
      loader: 'file?name=vendors/[1]&regExp=node_modules/(.*)',
      test: assets,
    },
    {
      include: resources,
      loader: 'file?name=resources/[1]&regExp=app/assets/(.*)',
      test: assets,
    },
    {
      exclude: [exclude, resources],
      loader: 'file?name=[path]/[name].[ext]',
      test: assets,
    },
  ]
};
