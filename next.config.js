/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  presets: ["next/babel"],
  enableSvg: true,
  swcMinify: false,
  images: {
    domains: ["flaglog.com"],
  },
};

module.exports = nextConfig;
