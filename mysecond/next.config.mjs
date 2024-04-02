/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.optimization.minimize = false;
      }
      return config;
    },
    swcMinify: false,
  };
  
  export default nextConfig;
  