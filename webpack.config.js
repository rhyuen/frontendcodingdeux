const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
    entry: {
        "index": path.join(__dirname, "src/index.jsx"),
        "login": path.join(__dirname, "src/login.jsx")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "src/templates/index.html"),
            filename: "index.html",
            inject: "body",
            title: "React Main Index"
        }),
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "src/templates/login.html"),
            filename: "login.html",
            inject: "body",
            title: "Login React Main Index"
        })
    ]
};