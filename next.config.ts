import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Disable the dev-only "segment explorer" devtools overlay. In some
  // Next 15.5 builds it corrupts the RSC client manifest and throws
  // `SegmentViewNode ... not found in the React Client Manifest`, ending
  // in a 500. It has no effect on the actual site or production builds.
  devIndicators: false,
  experimental: {
    devtoolSegmentExplorer: false,
  },
};

export default nextConfig;
