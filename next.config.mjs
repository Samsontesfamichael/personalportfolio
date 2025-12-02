/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/personalportfolio',
  assetPrefix: '/personalportfolio/',
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
}

export default nextConfig
