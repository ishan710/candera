/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/agent.html', destination: '/agent', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/personal', destination: '/', permanent: false },
      { source: '/personal/:path*', destination: '/', permanent: false },
      { source: '/enterprise', destination: '/', permanent: false },
      { source: '/enterprise/:path*', destination: '/', permanent: false },
      { source: '/resources', destination: '/', permanent: false },
      { source: '/resources/:path*', destination: '/', permanent: false },
    ];
  },
};
export default nextConfig;
