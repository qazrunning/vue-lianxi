const webpack = require("webpack");

const port = process.env.port || process.env.npm_config_port || 8848 // dev port
module.exports = {
    devServer: {
        port: port,
        open: true,
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            })
        ]
    }
}