const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const WriteFIle = require('write-file-webpack-plugin');

const path = require('path');

var mode = "development";
module.exports = {
    mode:mode,
    entry:"./src/main.js",
    devtool: 'inline-source-map',
    devServer:{
        contentBase:path.join(__dirname, 'dist'),
    },
    output:{
        filename:"bundle.js"
    },
    module:{
        rules:[
            {test: /\.hbs$/,loader: 'handlebars-loader', }
        ]
    },
    plugins:[
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            hash:true,
            title:mode,
            template:"index.hbs"
        }),
        new WriteFIle()
    ]
};
