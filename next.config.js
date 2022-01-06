/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, { webpack }) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.fallback = {
      process: require.resolve('process/browser'),
      zlib: require.resolve('browserify-zlib'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      buffer: require.resolve('buffer'),
      asset: require.resolve('assert'),
    };

    config.plugins.push(
      new webpack.ProvidePlugin({
        Buffer: ['buffer', 'Buffer'],
        process: 'process/browser',
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
