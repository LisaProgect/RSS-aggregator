import HtmlWebpackPlugin from 'html-webpack-plugin';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    mode: process.env.NODE_ENV || 'development',
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|ttf|svg)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: 'index.html' })],
};
