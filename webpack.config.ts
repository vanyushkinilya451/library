import path from "path";
import { Configuration } from "webpack";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { WebpackLoaders } from "./src/config/webpackLoaders";
import { WebpackPlugins } from "./src/config/webpackPlugins";
const __dirname = import.meta.dirname;

const config: Configuration & DevServerConfiguration = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.ts",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    hot: true,
    open: true,
    watchFiles: ["src/**/*.html"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: WebpackLoaders(),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: WebpackPlugins(),
};

export default config;
