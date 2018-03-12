const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        index:"./src/js/index.js",
         employment:"./src/js/employment.js",
          article:"./src/js/article.js"
    },
    //entry==>入口
    output: {
        path: __dirname + "/public",
        filename: "./js/[name][hash].js"
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        inline: true
    },
    module: {
        rules: [
          {
              test: /(\.jsx|\.js)$/,
              use: {
                  loader: "babel-loader",
                  options: {
                      presets: [
                          "env", "react"
                      ]
                  }
              },
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: {
                  loader:'css-loader',
                  options:{
                    minimize:true
                  }
                }
              })
          },
          {
    　　　　　test: /\.html$/,
    　　　　　loader: 'html-withimg-loader'
    　　　},
          {
              test: /\.(png|jpg|gif|jpeg)$/,
              use: [{
                  loader: 'url-loader?&name=img/[name].[ext]'
              }]
          },
          { 
              test: /\.(woff|svg|eot|xttf|ttf|woff2)\??.*$/, 
              use: [
                  {
                      loader: 'url-loader?limit=50000&name=./fonts/[name].[ext]'
                  }
              ]    
          }
      ]
  }, 
    //出口
    plugins:[
        new ExtractTextPlugin("./css/[name].css"),
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'./index.html',
            chunks:['index'],
            hash:true,
            minify:{
                removeAttributeQuotes: true, // 移除属性的引号
                caseSensitive: false, //是否大小写敏感
                removeComments:true, // 去除注释
                removeEmptyAttributes:true, // 去除空属性
                collapseWhitespace: true //是否去除空格
            }

        }),
        new HtmlWebpackPlugin({
            template:'./src/employment.html',
            filename:'./employment.html',
            chunks:['employment'],
            hash:true,
            minify:{
                removeAttributeQuotes: true, // 移除属性的引号
                caseSensitive: false, //是否大小写敏感
                removeComments:true, // 去除注释
                removeEmptyAttributes:true, // 去除空属性
                collapseWhitespace: true //是否去除空格
            }

        }),
         new HtmlWebpackPlugin({
            template:'./src/article.html',
            filename:'./article.html',
            chunks:['article'],
            hash:true,
            minify:{
                removeAttributeQuotes: true, // 移除属性的引号
                caseSensitive: false, //是否大小写敏感
                removeComments:true, // 去除注释
                removeEmptyAttributes:true, // 去除空属性
                collapseWhitespace: true //是否去除空格
            }

        })
        //new webpack.optimize.UglifyJsPlugin()
    ]

}