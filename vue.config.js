module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/github-action-demo/'
    : '/'
}