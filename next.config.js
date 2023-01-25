/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  modularizeImports: {
    '@hookform': { transform: '@hookform/{{member}}' },
  },
};

module.exports = nextConfig;
