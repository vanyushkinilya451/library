const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const Dotenv = require("dotenv-webpack");
// const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";

  return {
    mode: argv.mode || "development",
    entry: "./src/main.tsx",
    devServer: {
      static: {
        directory: path.join(__dirname, "dist"),
      },
      open: true,
      watchFiles: ["src/app/**/*.html"],
      historyApiFallback: true,
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      publicPath: isProduction ? "./" : "/",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(png|jpg|jpeg|gif|woff2)$/i,
          type: "asset/resource",
          generator: {
            filename: isProduction ? "[name][ext]" : "[name].[hash][ext]",
          },
        },
        {
          test: /\.svg$/i,
          type: "asset",
          resourceQuery: /url/,
          generator: {
            filename: isProduction ? "[name][ext]" : "[name].[hash][ext]",
          },
        },
        {
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          resourceQuery: { not: [/url/] },
          use: ["@svgr/webpack"],
        },
        {
          test: /\.css$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                postcssOptions: {
                  plugins: [require("autoprefixer")],
                },
              },
            },
          ],
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
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          shared: {
            test: /[\\/]src[\\/]shared[\\/]/,
            name: "shared",
            chunks: "all",
            priority: 10,
          },
        },
      },
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "index.html",
        favicon: "./src/shared/assets/icons/favicon.svg",
        inject: true,
        minify: isProduction
          ? {
              removeComments: true,
              collapseWhitespace: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
              removeEmptyAttributes: true,
              removeStyleLinkTypeAttributes: true,
              keepClosingSlash: true,
              minifyJS: true,
              minifyCSS: true,
              minifyURLs: true,
            }
          : false,
      }),
      new ESLintPlugin({
        extensions: ["js", "jsx", "ts", "tsx"],
        context: path.resolve(__dirname, "src"),
        fix: true,
        cache: true,
        emitWarning: true,
        emitError: true,
        failOnError: false,
        failOnWarning: false,
      }),
      new Dotenv(),
      // new BundleAnalyzerPlugin({
      //   analyzerMode: "static",
      //   openAnalyzer: false,
      //   reportFilename: "bundle-report.html",
      //   generateStatsFile: true,
      //   statsFilename: "bundle-stats.json",
      // }),
    ],
  };
};
