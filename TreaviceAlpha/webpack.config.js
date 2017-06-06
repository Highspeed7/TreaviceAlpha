module.exports = {
    // define entry point
    entry: {
        "polyfills": "./app/polyfills",
        "vendor": "./app/vendor",
        "app": "./app/main"
    },

    resolve: {
        extensions: ["", ".ts", ".js"]
    },

    // define output point
    output: {
        path: "dist",
        publicPath: "/dist/",
        filename: "js/[name].js"
    },

    module: {
        // preLoaders: [
        //    {
        //        test: /\.ts$/,
        //        exclude: /(node_modules)/,
        //        loader: "tslint"
        //    }
        // ],

        loaders: [
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.less$/,
                exclude: /(node_modules)/,
                loader: "style-loader!css-loader!less-loader"
            }
        ]
    }
};