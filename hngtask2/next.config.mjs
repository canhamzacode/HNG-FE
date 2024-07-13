/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['api.timbu.cloud']
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_BASE_URL}/:path*` // Proxy to Backend
      }
    ];
  }
};

export default nextConfig;
