/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/src/pages',
    output:'export',
    distDir:'dist',
images: {
    unoptimized: true
  },
};


export default nextConfig;
