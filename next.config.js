const isDevelopment = process.env.SCOPE !== 'production';
console.log(`isDevelopment: ${isDevelopment}`);
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['is2-ssl.mzstatic.com', 'is1-ssl.mzstatic.com', 'is3-ssl.mzstatic.com', 'is4-ssl.mzstatic.com', 'is5-ssl.mzstatic.com', 'is6-ssl.mzstatic.com'],
  },
  webpack: (config) => {
    if (isDevelopment) {
      config.optimization.minimize = false;
      config.optimization.concatenateModules = false;
    } else {
      config.optimization.minimize = true;
      config.optimization.concatenateModules = true;
    }


    return config;
  },
};

module.exports = nextConfig;
