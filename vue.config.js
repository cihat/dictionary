module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dictionary/' : '/',
  devServer: {
    port: 3454
  }
}
