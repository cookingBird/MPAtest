const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const context = path.resolve(__dirname, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const setMPA = () => {
  const entry = {};
  const HtmlWebpackPlugins = [];
  const entryFiles = glob.sync(path.join(__dirname, 'src/page/*/main.js'));
  Object.keys(entryFiles).map((folderName) => {
    const entryFile = entryFiles[folderName];
    const matches = entryFile.match(/src\/page\/(.*)\/(?:main|index)\.js/);
    const pageName = matches && matches[1];
    entry[pageName] = entryFile;
    HtmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './public/index.html'),
        filename: `${pageName}.html`,
        chunks: [pageName],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false,
        },
      }),
    );
  });
  return {
    entry: entry,
    HtmlWebpackPlugins: HtmlWebpackPlugins,
  };
};
const { entry, HtmlWebpackPlugins } = setMPA();
module.exports = {
  context: context,
  entry: entry,
  target: 'web',
  output: {
    hashFunction: 'xxhash64',
    publicPath: '/',
    path: path.join(__dirname, './dist'),
    filename: '[name]/[name].[chunkhash:16].js',
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm'],
  },
  module: {
    noParse: /^(vue|vuex|vue-router|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {
                whitespace: 'condense',
              },
            },
          },
        ],
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]',
        },
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'fonts/[name].[hash:8][ext]',
        },
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 2,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
        ],
      },
      /* config.module.rule('js|jsx') */
      {
        test: /\.m?jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext]',
        },
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]',
        },
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        use: [
          /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
          {
            loader: 'vue-style-loader',
            options: {
              sourceMap: false,
              shadowMode: false,
            },
          },
          /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 2,
            },
          },
          /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              postcssOptions: {
                plugins: [
                  function () {
                    /* omitted long function */
                  },
                ],
              },
            },
          },
        ],
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        use: [
          /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
          {
            loader: 'vue-style-loader',
            options: {
              sourceMap: false,
              shadowMode: false,
            },
          },
          /* config.module.rule('scss').oneOf('normal').use('css-loader') */
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 2,
            },
          },
          /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              postcssOptions: {
                plugins: [
                  function () {
                    /* omitted long function */
                  },
                ],
              },
            },
          },
          /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        use: [
          /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
          {
            loader: 'vue-style-loader',
            options: {
              sourceMap: false,
              shadowMode: false,
            },
          },
          /* config.module.rule('less').oneOf('normal').use('css-loader') */
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 2,
            },
          },
          /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              postcssOptions: {
                plugins: [
                  function () {
                    /* omitted long function */
                  },
                ],
              },
            },
          },
          /* config.module.rule('less').oneOf('normal').use('less-loader') */
          {
            loader: 'less-loader',
            options: {
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CaseSensitivePathsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.ProvidePlugin({
      mapGetters: ['vuex', 'mapGetters'],
      Vue: ['vue', 'default'],
    }),
  ].concat(HtmlWebpackPlugins),
};
