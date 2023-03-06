const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    mode: 'development',

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
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
    ],

    devServer: {
        port: 8088,
        liveReload: true,
        hot:false,
    }
}