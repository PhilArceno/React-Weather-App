const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: {
        javascript: "./src/index.jsx",
        html: "./public/index.html"
    },
    output: { //where we want all our bundled code to go
        path: path.join(__dirname, 'build')
    },
    module: { //specify loader
        rules: [
            {
                test: /\.(js|jsx)$/, //looks for anything thats a .js or .jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
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
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: "./index.html"
        })
    ]
}