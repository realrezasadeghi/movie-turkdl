/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        port: '',
        protocol: 'https',
        pathname: '/',
        hostname: 'image.tmdb.org'
      },
      {
        port: '',
        protocol: 'https',
        pathname: '/',
        hostname: 'www.themoviedb.org'
      },
    ],
    domains: ['image.tmdb.org', 'www.themoviedb.org'],
  }
}

module.exports = nextConfig
