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
        customers: "wms_customers@http://localhost:3003/customers_remoteEntry.js",
        departments: "wms_departments@http://localhost:3006/departments_remoteEntry.js",
        inventory: "wms_inventory@http://localhost:3008/inventory_remoteEntry.js",
        invoices: "wms_invoices@http://localhost:3004/invoices_remoteEntry.js",
        products: "wms_products@http://localhost:3002/products_remoteEntry.js",
        purchaseorders: "wms_purchaseorders@http://localhost:3007/purchaseorders_remoteEntry.js",
        purchases: "wms_purchases@http://localhost:3010/purchases_remoteEntry.js",
        routers: "wms_routers@http://localhost:3005/routers_remoteEntry.js",
        store: "wms_store@http://localhost:3001/store_remoteEntry.js",
        vendors: "wms_vendors@http://localhost:3009/vendors_remoteEntry.js"
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
