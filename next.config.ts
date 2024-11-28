import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader: false,
  env: {
    APP_URL: process.env.APP_URL,
    APP_ENV: process.env.APP_ENV,
    APP_SERVER_URL: process.env.APP_SERVER_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4200/api/:path*',
      },
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:4200/uploads/:path*',
      },
    ];
  },
};

export default nextConfig;
