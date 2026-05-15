import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.34', '192.168.1.110'],
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
