const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const path = require('path'); // Необходимо добавить этот импорт

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        port: 9000,
        hot: true,
        liveReload: true, // Включает автообновление страницы при изменениях
        watchFiles: ['src/**/*', 'dist/**/*'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // Шаблон HTML-файла
            filename: 'index.html', // Имя выходного HTML-файла
        }),
        new HtmlWebpackPlugin({
          template: './src/pages/about.html', // Шаблон HTML-файла для страницы "О нас"
          filename: 'about.html', // Имя выходного HTML-файла для страницы "О нас"
        }),
        new HtmlWebpackPlugin({
          template: './src/pages/reviews.html', // Шаблон HTML-файла для страницы "О нас"
          filename: 'reviews.html', // Имя выходного HTML-файла для страницы "О нас"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'sass-loader',
                ],
              },
              {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'fonts/[name][ext][query]', // Указывает папку для шрифтов
                },
              },
              {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/images/[name][ext][query]', // Указывает папку для изображений
                },
              },
        ],
    },
    mode: 'development',
};
