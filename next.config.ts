import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: __dirname, // This sets the root to the directory containing this config file
  },
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com", // Example hostname to import images from on <Image> component
      }
    ]
  }
};

export default nextConfig;