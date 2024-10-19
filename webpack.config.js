const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path'); // Необходимо добавить этот импорт

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html', // Шаблон HTML-файла
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    mode: 'development',
};
