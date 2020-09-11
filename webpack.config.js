const path = require('path')
const Plugin = require('./src/plugin')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    // loader 的执行顺序从下到上
                    {
                        loader: path.resolve('./src/loader2.js'),
                    },
                    {
                        loader: path.resolve('./src/loader1.js'),
                    },
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new Plugin()
    ]
}