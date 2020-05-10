const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFIle = require('write-file-webpack-plugin');
const vueLoaderPLugin = require('vue-loader/lib/plugin');

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
    plugins:[
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            hash:true,
            title:mode,
            template:"index.hbs"
        }),
        new WriteFIle(),
        new vueLoaderPLugin()
    ],
    module:{
        rules:[
            {test:  /\.hbs$/,loader: 'handlebars-loader'},
            {test: /\.vue$/,loader:'vue-loader'},
            { test: /\.html$/,
                loader: 'vue-template-loader',
                // We don't want to pass `src/index.html` file to this loader.
                exclude: /index.html/},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},

        ]
    },
    resolve: {
        alias: {
            //Todo: eliminae redudancy here
          'vue$': 'vue/dist/vue.js',
          'vue$': 'vue/dist/vue.esm.js',
          'vue$': 'vue/dist/vue.common.js'
        }
      }
};
