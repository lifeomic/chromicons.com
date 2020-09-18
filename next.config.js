const debug = process.env.NODE_ENV !== 'production';

const withTranspileModules = require('next-transpile-modules')([
  '@lifeomic/chromicons',
]);

module.exports = withTranspileModules({
  assetPrefix: !debug ? '/chromicons.com/' : '',

  experimental: {
    // https://github.com/vercel/next.js/issues/8103#issuecomment-586142928
    // https://github.com/vercel/next.js/pull/7704
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
