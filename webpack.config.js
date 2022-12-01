const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'deyuUtils'
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: {
                      chrome: "58",
                      ie: "11"
                    },
                    corejs: 3,
                    useBuiltIns: "usage"
                  }
                ]
              ]
            }
          },
          {
            loader: 'ts-loader',
          }
        ]
      }
    ]
  }
}