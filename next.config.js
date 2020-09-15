const withTranspileModules = require('next-transpile-modules')([
  '@lifeomic/chromicons',
]);

module.exports = withTranspileModules({
  experimental: {
    modern: true,
    polyfillsOptimization: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    });

    return config;
  },
});
