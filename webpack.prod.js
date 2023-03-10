const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
    mode: 'production',

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false,
                },
            },
            {
                test: /\.css$/,
                exclude: /style.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /style.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'file-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
            }
        ]
    },
    
    output: {
        clean: true,
        filename: '[name].[contenthash].js'
    },

    optimization: {
        minimize: true,
        minimizer: [ 
            new CssMinimizerPlugin(),
            new TerserPlugin() 
        ], 
    }, 

    plugins: [
        new HtmlWebpackPlugin( {
            title: 'webpack-config',
            template: './src/index.html'
        } ),

        new MiniCssExtractPlugin( {
            filename: '[name].[fullhash].css',
            ignoreOrder: false,
        } ),
        
        new CopyPlugin( {
            patterns: [
                { from: 'src/assets/', to: 'assets/' },
            ] 
        } ),
    ],

    devServer: {
        port: 8088,
        liveReload: true,
        hot:false,
    }
}