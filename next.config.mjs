/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Empty turbopack config to silence the warning
  turbopack: {},
};

export default nextConfig;
