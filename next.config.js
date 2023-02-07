/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/search/bbca',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
