var config = {
  entry: "./src/test_index.js",
  output:{
    filename: "bundle.js",
    path: "./build"
  },
  devtool: "source-map"
}

module.exports = config;