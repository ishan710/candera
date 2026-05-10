/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/agent.html', destination: '/agent', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
    ];
  },
};
export default nextConfig;
