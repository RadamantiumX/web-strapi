import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "*",
      },
    ],
  },
  i18n:{
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: false
  }
};

export default nextConfig;
