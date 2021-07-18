module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/dictionary/' : '/',
  devServer: {
    port: 3454
  },
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       sassOptions: {
  //         includePaths: [
  //           './src/views/*',
  //           './src/components/*',
  //           './src/components/**/*'
  //         ],
  //         resources: [
  //           './src/styles/_variables.scss',
  //           './src/styles/mixins/_mixins.scss'
  //         ]
  //       }
  //     }
  //   }
  // },
}
