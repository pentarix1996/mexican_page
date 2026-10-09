import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = {
  allowedDevOrigins: ['127.0.0.1', '192.168.1.34'],
};

export default nextConfig;