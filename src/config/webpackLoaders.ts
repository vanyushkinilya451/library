import { RuleSetRule } from "webpack";

export const WebpackLoaders = (): RuleSetRule[] => [
  {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  },
];
