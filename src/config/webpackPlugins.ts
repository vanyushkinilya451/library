const HtmlWebpackPlugin = require("html-webpack-plugin");
import { Configuration } from "webpack";

export const WebpackPlugins = (): Configuration["plugins"] => [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
  }),
];
