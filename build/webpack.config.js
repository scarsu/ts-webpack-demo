const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 入口设置为ts
  entry:'./src/index.ts',
  // 输出文件
  output:{
    filename:'app.js'
  },
  resolve:{
    // 模块导入 扩展名的处理，js、ts、tsx后缀的文件需要导入
    extensions:['.js','.ts','.tsx']
  },
  // 便于调试的sourcemap
  devtool:'cheap-module-eval-source-map',
  module:{
    rules:[
      // 配置一个ts-load的规则，使用ts-loader将ts文件编译
      {
        test: /\.tsx?$/i, // 匹配ts或tsx结尾的文件
        use:[{
          loader:'ts-loader'
        }],
        exclude:/node_modules/
      }
    ]
  },
  // 插件
  plugins:[
    new HtmlWebpackPlugin({
      // 自动在html中导入 output里配置的输出的js
      template:'./public/index.html'
    })
  ]
}