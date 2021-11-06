const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          { loader: "style-loader", options: { sourceMap: true } },
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
});
