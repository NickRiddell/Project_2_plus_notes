var config = {
  entry: "./src/index.js",
  output:{
    filename: "bundle.js",
    path: "./build"
  },
  devtool: "source-map",
  module: {
    loaders: [
      {include: /\.json$/, loaders: ["json-loader"]}
    ]
  },
  resolve: {
    extensions: ['', '.json', '.jsx', '.js']
  }
}

module.exports = config;