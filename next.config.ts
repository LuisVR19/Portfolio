import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repo = "/Portfolio";

const nextConfig: NextConfig = {
  typedRoutes: true,
  output: "export",
  basePath: isProd ? repo : "",
  assetPrefix: isProd ? repo : "",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
