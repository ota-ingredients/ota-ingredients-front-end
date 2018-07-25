module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    return config
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  },
  poweredByHeader: true
}
