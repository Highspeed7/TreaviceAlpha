const path = require("path");
module.exports = {
    resolve: {
        extensions: [".ts", ".js"]
    },
    devtool: "#cheap-module-eval-source-map",
    // define entry point
    entry: {
        "polyfills": "./app/polyfills.ts",
        "vendor": "./app/vendor.ts",
        "app": "./app/main.ts",
    },
    // define output point
    output: {
        path: path.resolve(__dirname, "dist"),
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
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ],
                test: /\.less$/
            }
        ]
    }
};