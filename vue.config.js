module.exports = {
    devServer: {
        port: 2300
    },

    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': []
            }
        }
    },

    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: false
        }
    }
}
