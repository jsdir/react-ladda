module.exports = {
  devtool: 'inline-source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(bower_components|node_modules)/,
      loader: 'babel-loader'
    }]
  }
};
