require('es6-promise').polyfill();
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    devtool: "clean-source-map",
    // define entry point
    entry: {
        "polyfills": "./app/polyfills.ts",
        "vendor": "./app/vendor.ts",
        "app": "./app/main.ts",
    },

    resolve: {
        extensions: [".ts", ".js"]
    },

    // define output point
    output: {
        path: "dist",
        publicPath: "/dist/",
        filename: "js/[name].js"
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                use: "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                loader:
                ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?sourcemap"
                })
            },
            {
                test: /\.less$/,
                exclude: /(node_modules)/,
                use: ExtractTextPlugin.extract({ use:
                ["css-loader", "less-loader"],
                fallback: "style-loader" })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("css/[name].css")
    ]
};