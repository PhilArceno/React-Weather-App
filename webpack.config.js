const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function(env, argv) {

const base = {
    entry: {
        javascript: "./server/server.ts"
      },
        output: {
      filename: 'js/server.js',
      // path needs to be an ABSOLUTE file path
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/',
    },
    devtool: 'cheap-module-eval-source-map',
    module: { //specify loader
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: '/node_modules/',
          },
            {
                test: /\.html$/,
                use: [{
                  loader: "html-loader"
                }]
              },
              {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
              },
              {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [{
                  loader: "url-loader",
                  options: {
                    limit: 30000,
                    name: "[name].[ext]"
                  }
                }]
              }
        ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.jsx' ],
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: './public/index.html',
    //         filename: "./index.html"
    //     })
    // ]
}

  // server-specific configuration
  if (env.platform === 'server') {
    base.target = 'node';
  }

  // client-specific configurations
  if (env.platform === 'web') {
    base.entry = './src/index.tsx';
    base.output.filename = 'js/client.js';
  }

  return base
}