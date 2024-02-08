const path = require('path')
module.exports = {
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          parallel: true,
        }),
      ],
    },

    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'node_modules'),
      },
    },
  };

