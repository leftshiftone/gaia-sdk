const path = require('path');

module.exports = (env, argv) => ({
    entry: {
        'gaia-js-sdk-all': './src/all.ts',
        'gaia-js-sdk-atlas': './src/atlas.ts',
        'gaia-js-sdk-heimdall': './src/heimdall.ts',
        'gaia-js-sdk-rain': './src/rain.ts',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        library: "GaiaJsSDK",
        libraryTarget: "umd",
        filename: 'libs/[name].min.js',
        path: path.resolve(__dirname, 'dist'),
    }
});
