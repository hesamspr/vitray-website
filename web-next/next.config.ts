import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'polarisinsights.tech',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
