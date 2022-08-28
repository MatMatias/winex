/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["img.wine.com.br"],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
