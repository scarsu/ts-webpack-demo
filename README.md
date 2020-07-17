# ts-webpack-demo
从0配置一个ts+webpack项目

```bash
# 全局安装ts
npm i typescript -g

# 生成ts配置文件
tsc --init

# 初始化npm包
npm init

# 安装相关工具
npm i webpack webpack-cli webpack-dev-sevrer ts-loader typescript html-webpack-plugin
```

webpack配置

```jsx
// /build/webpack.config.js
// webpack配置ts-loader

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
```

html

```jsx
// /public/index.html
// 不需要引入js

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
</body>
</html>
```

入口ts文件

```jsx
// /src/index.ts

const msg = 'hi typescript'

function sayHi(msg:string){
  return 'hello,'+msg
}

document.body.textContent = sayHi(msg)
```

添加npm启动脚本

```jsx
"dev": "webpack-dev-server --config ./build/webpack.config.js"
```