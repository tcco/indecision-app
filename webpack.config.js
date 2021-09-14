// entry point
// where to output bundle file
//
const path = require('path');

module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
};

// loader
