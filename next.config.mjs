/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/agent.html', destination: '/agent', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/resources', destination: '/', permanent: false },
      { source: '/resources/:path*', destination: '/', permanent: false },
    ];
  },
};
export default nextConfig;
