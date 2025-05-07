import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.themealdb.com',
        port: '',
        pathname: '/images/media/meals/**',
        search: '',
      },
    ],
  },
};

  const withNextIntl = createNextIntlPlugin();
  export default withNextIntl(nextConfig);
