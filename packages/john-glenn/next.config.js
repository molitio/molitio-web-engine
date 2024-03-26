/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'standalone',
    distDir: '../../.artifacts/john-glenn',
    //distDir: '.next',
    swcMinify: true,
    reactStrictMode: true,
};

module.exports = nextConfig;
