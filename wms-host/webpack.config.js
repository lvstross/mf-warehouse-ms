const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "wms_host",
      filename: "remoteEntry.js",
      remotes: {
        customers: "customers@http://localhost:3003/remoteEntry.js",
        departments: "departments@http://localhost:3006/remoteEntry.js",
        inventory: "inventory@http://localhost:3008/remoteEntry.js",
        invoices: "invoices@http://localhost:3004/remoteEntry.js",
        products: "products@http://localhost:3002/remoteEntry.js",
        purchaseorders: "purchaseorders@http://localhost:3007/remoteEntry.js",
        purchases: "purchases@http://localhost:3010/remoteEntry.js",
        routers: "routers@http://localhost:3005/remoteEntry.js",
        store: "store@http://localhost:3001/remoteEntry.js",
        vendors: "vendors@http://localhost:3009/remoteEntry.js"
      },
      exposes: {},
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
