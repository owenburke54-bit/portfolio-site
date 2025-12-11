import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Avoid blocking production builds on lint configuration differences.
    ignoreDuringBuilds: true
  }
};

export default nextConfig;


