const path = require('path');

// Thư viện đóng gói file HTML 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


// Khai báo các thư viên đê webpack đóng gói
const vendor_lib = [
    "bootstrap",
    "jquery",
    "popper.js",
    "@fortawesome/fontawesome-free"
]

const devServer = {
    port: 4000,
    open: true,
}

module.exports = {
    devServer,

    // Đầu vào các file js sẽ dc đóng gói
    entry: {
        index: './app/Controllers/index.ts',
        vendors: vendor_lib
    },

    // Đầu ra các file dc đóng gói 
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    // đóng gói những file có đuôi css,scss,jpg,png ....
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|wav|mp3|ico|svg)$/,
                use: [
                    {
                       loader: 'file-loader',
                       options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts',
                            publicPath: 'fonts'
                       }
                    }
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
              }

        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
      },

    // Optimizaton vendor
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    chunks: "all",
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    enforce: true
                },
            }
        },

        // minify inline css
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
            }),
            new OptimizeCSSAssetsPlugin({})
        ]

    },


    plugins: [
        new HtmlWebpackPlugin({
            // Khi build ra file index.html chỉ có file index.js dc link vào html
            chunks: ['index','vendors'],
            template: './app/Views/index.html',
            filename: 'index.html'
        }),
       

        // Tách css ra khỏi file js
        new MiniCssExtractPlugin({
            chunkFilename: "[name].css",
        }),
    ],
};