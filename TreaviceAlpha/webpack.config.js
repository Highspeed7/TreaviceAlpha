require('es6-promise').polyfill();
module.exports = {
    // define entry point
    entry: {
        "polyfills": "./app/polyfills.ts",
        "vendor": "./app/vendor.ts",
        "app": "./app/main.ts",
    },
    // define output point
    output: {
        path: "dist",
        filename: "js/[name].js"
    },

    module: {
        rules: [
            {
                use: "tslint-loader",
                test: /\.ts$/
            },
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
                test: "/\.less$/"
            }
        ]
    }
};