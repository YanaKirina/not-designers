/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/graphql',
        destination: 'http://localhost:8080/models/1/graphql',
      },
    ];
  },
};

export default nextConfig; 