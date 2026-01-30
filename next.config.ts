import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/vj-website',
  assetPrefix: '/vj-website/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
