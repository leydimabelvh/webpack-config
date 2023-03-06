const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );


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
    ],

    devServer: {
        port: 8088,
        liveReload: true,
        hot:false,
    }
}