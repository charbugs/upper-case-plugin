const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'UpperCasePlugin',
    libraryExport: 'default'
  },
  resolve: {
    alias: {
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
      '@charbugs/extensible-todo-app': path.resolve(__dirname, './node_modules/@charbugs/extensible-todo-app'),
    }
  },
  externals: {
    react: {
      commonjs: "react",
      commonjs2: "react",
      amd: "React",
      root: "React"
    },
    "react-dom": {
      commonjs: "react-dom",
      commonjs2: "react-dom",
      amd: "ReactDOM",
      root: "ReactDOM"
    },
    '@charbugs/extensible-todo-app': {
      commonjs: "@charbugs/extensible-todo-app",
      commonjs2: "@charbugs/extensible-todo-app",
      amd: "@charbugs/extensible-todo-app",
      root: "@charbugs/extensible-todo-app"
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
