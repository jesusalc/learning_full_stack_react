const path = require('path'),
      webpack = require('webpack'),
      NODE_ENV = process.env.NODE_ENV,
      IS_PROD = NODE_ENV === 'production',
      config = {
        performance: {
          hints: IS_PROD
        },
        // devtool: IS_PROD ? 'source-map' : 'cheap-eval-source-map',
        devtool: 'source-map',
        entry: './src/app.jsx',
        output: {
          path: path.resolve(__dirname, 'public/dist'),
          filename: 'app.js',
          library: 'App',
        },
        module: {
          rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: 'node_modules',
            options: {
              presets: ['react']
            }
          }]
        }
      }


if (IS_PROD) {
  const BabiliPlugin = require('babili-webpack-plugin')
  config.plugins.push(
    new BabiliPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    })
  )
}


module.exports = config