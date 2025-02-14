const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
    ...defaultConfig,
    resolve: {
        ...defaultConfig.resolve,
        extensions: ['.js', '.jsx', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['@babel/preset-env', { targets: 'defaults' }],
                                '@babel/preset-react'
                            ],
                        },
                    },
                ],
            },
            ...defaultConfig.module.rules,
        ],
    },
};
