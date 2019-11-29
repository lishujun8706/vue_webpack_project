const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    devServer:{
        open:true,
        port:3000,
        contentBase:'src',
        hot:true
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
        {test:/\.css$/,use:['style-loader','css-loader']},
        {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
        {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
        {test:/\.(jpg|JPG|PNG|png|gif|GIF)$/,use:'url-loader?limit=33978&name=[hash:8]-[name].[ext]'},
        {test:/\.(js)$/,use:'babel-loader',exclude:/node_modules/},
        {test:/\.vue$/,use:'vue-loader'},
        ]
    }
}