const helpers = require("./helpers");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    // define entry point
    entry: {
        "polyfills": "./app/polyfills.ts",
        "vendor": "./app/vendor.ts",
        "app": "./app/main.ts",
    },
    // define output point
    output: {
        path: helpers.root("TreaviceAlpha/dist"),
        filename: "js/[name].js",
        sourceMapFilename: "[file].map"
    },

    module: {
        rules: [
            //{
            //    use: "tslint-loader",
            //    test: /\.ts$/
            //},
            {
                use: "awesome-typescript-loader",
                test: /\.ts$/
            },
            {
                test: /\.less$/,
                exclude: helpers.root("app"),
                loader: ExtractTextPlugin.extract({
                    fallback: ["style-loader"],
                    use: ["css-loader", "less-loader"]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles/styles.css")
    ]

};