const path = require("path");
const { merge } = require("webpack-merge");
const CopyPlugin = require("copy-webpack-plugin");

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");

const wasmFile = path.resolve(
  __dirname,
  "node_modules",
  "mediainfo.js",
  "dist",
  "MediaInfoModule.wasm"
);

const commonConfig = {
  entry: "./src/index.tsx",
  output: {
    publicPath: "/",
    filename: "[name].[contenthash].bundle.js",
  },
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
  plugins: [
    new HtmlWebpackPlugin({
      alwaysWriteToDisk: true,
      template: "src/index.html",
    }),
    new HtmlWebpackHarddiskPlugin(),
  ],
};

const developmentConfig = {
  devtool: "eval",
  devServer: {
    allowedHosts: "all",
    historyApiFallback: true,
    host: "0.0.0.0",
    hot: true,
    port: 3000,
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: wasmFile, to: path.resolve(__dirname, "public"), force: true },
      ],
    }),
  ],
};

const productionConfig = {
  devtool: "source-map",
  output: {
    publicPath: "/",
    filename: "[name].[contenthash].bundle.js",
  },
  optimization: {
    minimize: true,
    splitChunks: {
      minSize: 0,
    },
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: wasmFile, to: path.resolve(__dirname, "dist"), force: true },
      ],
    }),
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
