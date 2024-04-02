/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.optimization.minimize = false;
    }
    return config;
  },
  babel: {
    presets: ['@babel/preset-env'],
  },
};
export default nextConfig;
