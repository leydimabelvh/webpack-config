const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CopyPlugin = require("copy-webpack-plugin");



module.exports = {
    mode: 'development',

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
            }
        ]
    },
    
    output: {
        clean: true,
    },

    optimization: {

    }, 

    plugins: [
        new HtmlWebpackPlugin( {
            title: 'webpack-config',
            template: './src/index.html'
        } ),

        new MiniCssExtractPlugin( {
            filename: '[name].css',
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