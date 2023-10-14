const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/server.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CopyPlugin(
      {
        patterns: [
          {
            from: path.resolve(__dirname, 'node_modules/swagger-ui-dist/'),
            to: 'node_modules/swagger-ui-dist',
          }
        ]
      }
    ),
  ],
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'build')
  }
};
