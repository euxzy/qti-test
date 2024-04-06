/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    baseApi: process.env.BASE_API
  },
  reactStrictMode: false
}

export default nextConfig
