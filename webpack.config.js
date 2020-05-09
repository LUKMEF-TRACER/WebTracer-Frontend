const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var mode = "development";
module.exports = {
    mode:mode,
    entry:"./src/main.js",
    devtool: 'inline-source-map',
    devServer:{
        contentBase:path.join(__dirname, 'dist'),
        compress:true
    },
    plugins:[
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            hash:true,
            title:mode
        })
    ],
    output:{
        filename:"bundle.js"
    }
};
