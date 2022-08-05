const path = require('path')

module.exports = {
    mode: "production",
    entry: {
        Navbar: path.resolve(__dirname, 'src/modules/NavBar', 'index.js'),
        NavbarMobile: path.resolve(__dirname, 'src/modules/NavBarMobile', 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                "targets": "defaults"
                            }],
                            '@babel/preset-react'
                        ]
                    }
                }]
            }
        ]
    }
}
