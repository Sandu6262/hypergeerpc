/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hypergeerpc',
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: '/hypergeerpc',
  },
}

module.exports = nextConfig
