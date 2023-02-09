/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  presets: ["next/babel"],
  enableSvg: true,
  swcMinify: false,
  env: {
    API_BASE: process.env.API_BASE,
    API_SITE_BASE: process.env.API_SITE_BASE,
    SITE_BASE: process.env.SITE_BASE
  },
  images: {
    domains: ["flaglog.com"]
  }
}

module.exports = nextConfig
