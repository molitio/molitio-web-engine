require('webpack-dev-server');
const nodeExternals = require('webpack-node-externals');
const svgToMiniDataURI = require('mini-svg-data-uri');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');

console.log(`processCwd: ${path.resolve(__dirname, 'src/app/components')}`);

const app = {
    name: 'app',
    target: 'web',
    entry: {
        app: path.resolve(__dirname, 'src/app/AurumSophia.tsx'),
        'assets/images': path.resolve(__dirname, 'src/app/assets/images'),
        'assets/data': path.resolve(__dirname, 'src/app/assets/data'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name]/[hash][ext]',
        filename: '[name].[contenthash].js',
    },
    resolve: {
        alias: {
            components: path.resolve(__dirname, 'src/app/components'),
            styles: path.resolve(__dirname, 'src/app/styles'),
            pages: path.resolve(__dirname, 'src/app/pages'),
            services: path.resolve(__dirname, 'src/app/services'),
        },
        extensions: ['', '.ts', '.tsx'],
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.client.json',
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif|svg$)$/,
                type: 'asset/resource',
            },
            {
                test: /\.json$/,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()],
};

/* const assets = {
    name: 'assets',
    target: 'node',
    resolve: {
        alias: {
            images: path.resolve(__dirname, 'src/assets/images'),
            dtata: path.resolve(__dirname, 'src/assets/data'),
        },
    },
    entry: path.resolve(__dirname, 'src/assets/index.js'),
    output: {
        path: path.resolve(`${process.cwd()}/dist/public/assets`),
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg$)$/,
                type: 'asset/resource',
            },
            {
                test: /\.json$/,
                type: 'asset/resource',
            },
        ],
    },
}; */

const client = {
    name: 'client',
    target: 'web',
    entry: {
        client: path.resolve(__dirname, '/src/client/client.tsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist/public'),
        filename: '[name].[contenthash].js',
        publicPath: '',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.client.json',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new CleanWebpackPlugin(), new WebpackManifestPlugin()],
};

/* 
const server = {
    name: 'server',
    target: 'node',
    entry: {
        index: path.resolve(`${process.cwd()}/src/index.ts`),
        dependOn: 'assets/images',
    },
    mode: 'production',
    output: {
        path: path.resolve(`${process.cwd()}/dist`),
        publicPath: 'public/',
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.ts', '.tsx'],
    },
    externals: [nodeExternals()],
    node: {
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                          {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react'],
                        },
                    }, 
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.server.json',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ context: 'server', from: 'views', to: 'views' }],
        }),
    ],
}; */

//module.exports = [client, server, assets];
//module.exports = [app, assets, client];
module.exports = [app, client];
