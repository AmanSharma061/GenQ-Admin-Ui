module.exports = {
    images: {
      domains:['genqbackend.s3.ap-south-1.amazonaws.com']
    },
    webpack(config:any) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
   
  }