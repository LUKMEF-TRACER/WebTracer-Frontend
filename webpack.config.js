const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WriteFIle = require('write-file-webpack-plugin');
const vueLoaderPLugin = require('vue-loader/lib/plugin');
const copyPlugin = require('copy-webpack-plugin')

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
        new vueLoaderPLugin(),
        new copyPlugin({
            patterns:[{
                from:'./workers.js', to:'workers.js'
            }]
        })
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
            {
                test:/\.(png|jpe?g|jpg|svg|gif)$/i,
                loader:'file-loader',
                options:{
                    outputPath:'images'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader:'file-loader',
                    options:{
                        outputPath:'fonts'
                    }
                }
            }

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
