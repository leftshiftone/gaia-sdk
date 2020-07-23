const path = require('path');

module.exports = (env, argv) => ({
    entry: {
        'gaia-js-sdk': './src/Gaia.ts',
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
        library: "GaiaSdk",
        libraryTarget: "umd",
        filename: 'libs/[name].min.js',
        path: path.resolve(__dirname, 'dist'),
    }
});
