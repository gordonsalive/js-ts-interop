const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const bundleConfig = require('./bundle.config.json');

// from good tutorial: https://www.tutorialspoint.com/babeljs/babeljs_working_babel_with_jsx.htm

// const sourcePath = path.join(__dirname, './src');
const outputPath = path.join(__dirname, './dev');

module.exports = {
    entry: {
        app: './src/main.js',
        alt: './src/alt.js' // a second source and so second output, useful for migration, copied from webpack tutorial
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // for this dev app just overwrite index.html in root each time
            filename: path.join(__dirname, './index.html'),
            template: path.join(__dirname, bundleConfig.isProd ? './indexProd.html' : './indexDev.html'),
            inject: 'body',
            chunks: ['app'] // this tells it to only inject app (not alt in this case)
        })
    ],
    output: {
        // resolve end up with a full path - resillient to file moving up/down
        path: path.resolve(__dirname, outputPath),
        filename: '[name].bundle.js' // [name] is the name of the specific entry above
    },
    // mode instructs webpack how to bundle - for minimum size & max efficiency (production),
    //   or for more info and easier development (development)
    mode: bundleConfig.isProd ? 'production' : 'development',

    // Enable sourcemaps for debugging webpack's output.
    // devtool: bundleConfig.isProd ? '' : 'source-map',
    devtool: 'source-map', // always prodice a source map, even in prod, for our sanity

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [
                    /* { loader: 'babel-loader' }, let ts compiler do all the work for ts files */
                    { loader: 'ts-loader' }
                ]
            },
            // {
            //     for the sake of this proto, it doesn't look like we need babel at all!
            //     test: /\.js(x?)$/,
            //     include: path.resolve(__dirname, 'src'),
            //     exclude: /node_modules/,
            //     use: [
            //         { loader: 'babel-loader' }
            //     ]
            // },
            // {
            //     test: /\.(js|jsx)$/,
            //     include: path.resolve(__dirname, 'src'),
            //     loader: 'babel-loader',
            //     query: {
            //         // it's the react preset the convert JSX to JS
            //         // presets: ['es2015','react']
            //         presets: ['@babel/preset-env', '@babel/preset-react']
            //     }
            // },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    resolve: {
        // we need to tell webpack how to look for imported files where we've left the extension off
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM'
    }
};
