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
  // Preserve SEO equity from the legacy vitrayco.com flat success-story URLs by
  // permanently (308) forwarding them to their new /success-stories/* paths.
  // The legacy listing (/success-stories) already maps to the new listing route.
  async redirects() {
    return [
      { source: '/haraz-dairy', destination: '/success-stories/haraz-dairy', permanent: true },
      { source: '/gerad-succuss-story', destination: '/success-stories/gerad', permanent: true },
      { source: '/behnoush-iran-succuss-story', destination: '/success-stories/behnoush-iran', permanent: true },
      { source: '/telavang-cs', destination: '/success-stories/telavang', permanent: true },
    ];
  },
};

export default nextConfig;
