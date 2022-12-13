/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  images:  {
    domains: ['raw.githubusercontent.com'],
    deviceSizes: [320, 640, 768, 1024, 1600, 1920, 2560]
  }
}, nextConfig