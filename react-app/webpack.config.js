const path = require("path");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.bundle.js",
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // "side-effect": false,

          // below syntax is for babel 6
          options: {
            presets: ["@babel/preset-env"],
          },

          // below syntax is for babel 5
          // options: {
          //     presets: [
          //         ['es2015', { module: false }]
          //     ]
          // }
        },
      },
      // {
      //   test: /\.css$/i,
      //   use: ["style-loader", "css-loader"],
      // },
    ],
  },
};
