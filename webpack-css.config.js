const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require("glob");

module.exports = {
  entry: {
    editor: glob.sync("./src/blocks/**/editor.scss"), 
    style: glob.sync("./src/blocks/**/style.scss"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js", // Optional: if you want separate JS files
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src"), // Optional: Allows you to use "src/" without "./"
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
