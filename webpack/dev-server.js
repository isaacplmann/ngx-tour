'use strict';

module.exports = {
  contentBase: './src',
  port: 9000,
  publicPath: '/ng2-tour/',
  inline: true,
  historyApiFallback: true,
  stats: 'errors-only',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 500
  }
};
