const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        // loaders: {
        //     // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
        //     // the "scss" and "sass" values for the lang attribute to the right configs here.
        //     // other preprocessors should work out of the box, no loader config like this necessary.
        //     'scss': 'vue-style-loader!css-loader!sass-loader',
        //     'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
        //     'less': 'vue-style-loader!css-loader!less-loader'
        // }

        css: ExtractTextPlugin.extract({
          use: 'css-loader',
          fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
        }),
        less: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader'],
          fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
        })
        // other vue-loader options go here
      }
    },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        loader: 'file-loader',
        options: {
          limit:10000,
          name: './img/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'less-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader'
          ]
        })
      }

    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.scss', '.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  plugins: [

    new HtmlWebpackPlugin({ // html模板输出插件
      title: 'Blog',
      template: './index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new ExtractTextPlugin({ // css抽离插件,单独放到一个style文件当中.
      filename: 'style.css',
      allChunks: true,
      disable: false
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
