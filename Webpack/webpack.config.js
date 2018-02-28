let path = require('path');
// 一个插件
class P {
  apply(compiler) {
    compiler.hooks.emit.tap('emit', function () {
      console.log('emit');
    })
  }
}
// 一个插件
class P1 {
  apply(compiler) {
    compiler.hooks.afterPulgins.tap('emit', function () {
      console.log('afterPlugins');
    })
  }
}



module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [
        path.resolve(__dirname, 'loader', 'style-loader'),
        path.resolve(__dirname, 'loader', 'less-loader')
      ]
    }]
  },
  plugins: [
    new P(),
    new P1()
  ]
}