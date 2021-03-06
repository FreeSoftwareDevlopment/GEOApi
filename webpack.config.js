const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.pack.js'
  },
  plugins: [
   new CopyPlugin([
     { from: 'src/static', to: '.' }
   ])
  ]
};
