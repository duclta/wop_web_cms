const devMode = process.env.NODE_ENV !== "production";
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const CSSModuleLoader = {
  loader: "css-loader",
  options: {
    modules: {
      localIdentName: "[name]_[local]_[hash:base64:5]",
    },
    importLoaders: 2,
    sourceMap: false, // turned off as causes delay
  },
};
// For our normal CSS files we would like them globally scoped
const CSSLoader = {
  loader: "css-loader",
  options: {
    importLoaders: 2,
    sourceMap: false, // turned off as causes delay
  },
};
// Our PostCSSLoader
// const autoprefixer = require("autoprefixer");
// const PostCSSLoader = {
//   loader: "postcss-loader",
//   options: {
//     sourceMap: false, // turned off as causes delay
//     postcssOptions: {
//       plugins: () => [
//         autoprefixer({
//           browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"],
//         }),
//       ],
//     },
//   },
// };
// Standard style loader (prod and dev covered here)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const styleLoader = devMode ? "style-loader" : MiniCssExtractPlugin.loader;
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
module.exports = {
  entry: {
    index: path.join(__dirname, "src", "index.tsx"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  target: "web",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
          },
        },
        exclude: "/node_modules/",
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /\.module\.(sa|sc|c)ss$/,
        use: [styleLoader, CSSLoader, "sass-loader"],
      },
      {
        test: /\.module\.(sa|sc|c)ss$/,
        use: [styleLoader, CSSModuleLoader, "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp|svg)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
  devServer: {
    port: 8001,
    open: true,
    historyApiFallback: true,
    disableHostCheck: true,
  },
  optimization: {
    minimize: devMode ? false : true,
  },
  performance: {
    hints: devMode ? false : true,
  },
  mode: process.env.NODE_ENV,
  cache: {
    type: "filesystem",
  },
};
