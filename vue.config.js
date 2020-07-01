module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/ouyou' : '/',
    outputDir: 'dist',
    productionSourceMap: true,
    assetsDir: "static",
    indexPath: "index.html",
    filenameHashing: true,
    configureWebpack: {}
}