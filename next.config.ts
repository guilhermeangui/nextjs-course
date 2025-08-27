import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname, // This sets the root to the directory containing this config file
  },
};

export default nextConfig;