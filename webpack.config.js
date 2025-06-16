const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/main.tsx",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
    watchFiles: ["src/app/**/*.html"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.ttf/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      shared: path.resolve(__dirname, "src/shared"),
      entities: path.resolve(__dirname, "src/entities"),
      features: path.resolve(__dirname, "src/features"),
      widgets: path.resolve(__dirname, "src/widgets"),
      pages: path.resolve(__dirname, "src/pages"),
      app: path.resolve(__dirname, "src/app"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
      filename: "index.html",
    }),
  ],
};
