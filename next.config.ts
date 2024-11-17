import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    dynamicIO: true,
    ppr: true,
  },
};

export default nextConfig;
