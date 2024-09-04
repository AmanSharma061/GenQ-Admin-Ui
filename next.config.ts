// next.config.js

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
    domains: ['genqbackend.s3.ap-south-1.amazonaws.com'],
  },
};
