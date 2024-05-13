/** @type {import('next').NextConfig} */

const nextConfig = {
  export:'output',
  reactStrictMode: true,
  distDir: 'build',
  images: {
    unoptimized: true
  },
};


export default nextConfig;
