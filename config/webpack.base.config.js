const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CURRENT_WORKING_DIR = process.cwd();
const APP_DIR = path.join(CURRENT_WORKING_DIR, "client/");

module.exports = () => {
  let isDevelopment = process.env.NODE_ENV === "development";
  const entry = {
    dev: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client?reload=true",
      APP_DIR,
    ],
    prod: [APP_DIR],
  };

  return merge([
    {
      name: "browser",
      mode: process.env.NODE_ENV,
      devtool: "eval-source-map",
      entry: isDevelopment ? entry.dev : entry.prod,
      output: {
        path: path.join(CURRENT_WORKING_DIR, "/dist"),
        filename: "bundle.js",
        publicPath: "/dist/",
      },
      node: {
        fs: "empty",
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
            },
          },
          {
            test: /\.module\.s(a|c)ss$/,
            loader: [
              isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
              {
                loader: "css-loader",
                options: {
                  modules: true,
                  sourceMap: isDevelopment,
                },
              },
              {
                loader: "sass-loader",
                options: {
                  sourceMap: isDevelopment,
                },
              },
            ],
          },
          {
            test: /\.s(a|c)ss$/,
            exclude: /\.module.(s(a|c)ss)$/,
            loader: [
              isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
              "css-loader",
              {
                loader: "sass-loader",
                options: {
                  sourceMap: isDevelopment,
                },
              },
            ],
          },
          {
            test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
            use: "file-loader",
          },
        ],
      },
      resolve: {
        extensions: [".js", ".jsx", ".scss"],
      },
      plugins: isDevelopment
        ? [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
          ]
        : "",
    },
  ]);
};
