const path = require("path");
const { merge } = require("webpack-merge");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

const commonConfig = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
    fallback: {
      fs: false,
      path: false,
      url: false,
      module: false,
    },
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};

const productionConfig = {};

const developmentConfig = {
  devtool: "eval",
  devServer: {
    compress: true,
    port: 3000,
    host: "0.0.0.0",
  },
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: "src/index.html",
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
};

module.exports = (env, args) => {
  switch (args.mode) {
    case "development":
      return merge(commonConfig, developmentConfig);
    case "production":
      return merge(commonConfig, productionConfig);
    default:
      throw new Error("No matching configuration was found!");
  }
};
