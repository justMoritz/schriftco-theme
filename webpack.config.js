const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const fs = require('fs');
const path = require('path');
const glob = require('glob');


class MergeStylesPlugin {
    apply(compiler) {
        compiler.hooks.done.tap('MergeStylesPlugin', () => {
            const buildDir = path.resolve(__dirname, 'build');
            const blockDirs = path.join(__dirname, 'build', 'blocks', '**', 'style-index.css');
            const blockDirsEditor = path.join(__dirname, 'build', 'blocks', '**', 'index.css');
            
            // Find all style.css files
            const files = glob.sync(blockDirs);
            const filesEditor = glob.sync(blockDirsEditor);

            console.log('Index CSS files:', files);
            console.log('Index RTL CSS files:', filesEditor);


            if (files.length === 0) {
                console.log('No index.css files found.');
                return;
            }

            if (filesEditor.length === 0) {
                console.log('No index-rtl.css files found.');
                return;
            }

            let mergedContent = '';
            let mergedContentEditor = '';

            files.forEach((file) => {
                mergedContent += fs.readFileSync(file, 'utf-8') + '\n';
            });

            filesEditor.forEach((fileW) => {
                mergedContentEditor += fs.readFileSync(fileW, 'utf-8') + '\n';
            });

            // Write merged styles.css to /build
            fs.writeFileSync(path.join(buildDir, 'styles.css'), mergedContent, 'utf-8');
            console.log('Merged styles.css created in /build');
            fs.writeFileSync(path.join(buildDir, 'editor.css'), mergedContentEditor, 'utf-8');
            console.log('Merged editor.css created in /build');
        });
    }
}

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
    plugins: [
        ...(defaultConfig.plugins || []),
        new MergeStylesPlugin()
    ],
};
