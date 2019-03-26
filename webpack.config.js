const path = require('path');

module.exports = {
  entry: './sketch.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
//   node:{
//       console:true,
//       fs: 'empty',
//         net: 'empty',
//         tls: 'empty'
//   },
  devServer:{
    watchContentBase: true
  }
};