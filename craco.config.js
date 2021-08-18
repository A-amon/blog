const path = require('path')

module.exports = {
    webpack: {
        alias: {
            '@routes': path.resolve(__dirname, 'src/routes'),
            '@layouts': path.resolve(__dirname, 'src/layouts'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@containers': path.resolve(__dirname, 'src/containers'),
            '@functions': path.resolve(__dirname, 'src/functions'),
            '@assets': path.resolve(__dirname, 'src/assets')
        }
    }
}