var path = require('path');
var webpack = require('webpack');

var config = {
     entry: './src/index.jsx',
     output: {
         path: __dirname,
         filename: 'sorting.js',
         library: ['Sorting'],
     },
     externals: {
         "react": "React",
         "react-dom": "ReactDOM",
     },
     module: {
         loaders: [{
             test: /.jsx?$/,
             loader: 'babel-loader',
             exclude: /node_modules/,
             query: {
                 presets: ['stage-2', 'es2015', 'react']
             }    
         }]
    }
};

module.exports = config;
