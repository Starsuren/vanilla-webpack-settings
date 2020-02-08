const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = merge(common,{
    mode:"development",
    output: {
        filename: "[name].[contentHash]bundle.js",
        path: path.resolve(__dirname, "dist")
      },
  plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html"
        })
      ],
  module: {
        rules: [ {
          test: /\.s?css$/,
          oneOf:[
            { 
              test: /\.module\.s?css$/,
              use: [
                "style-loader",
                {
                  loader: "css-loader",
                  options: { modules: true,  importLoaders: 1 }
                },
                "sass-loader"
              ]
           },
            {
          use: [
            "style-loader", 
            "css-loader", 
            "sass-loader" 
          ]
            }
        
      ]
    }]
}});