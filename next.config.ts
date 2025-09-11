import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static3.depositphotos.com',
        // Optional: you can add pathname patterns if needed
        // pathname: '/1000859/**',
      },
      {
        protocol: 'https',
        hostname: 'orianacosmetic.com',
      },
    ],
  },
};

export default nextConfig;