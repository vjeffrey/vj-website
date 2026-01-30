import type { NextConfig } from "next";

const repoName = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoName,
  assetPrefix: repoName,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
