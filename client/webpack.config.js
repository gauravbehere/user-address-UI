const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './index.js',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new CopyPlugin([
      { from: 'index.html', to: '', flatten: false }
    ])
  ]
};
