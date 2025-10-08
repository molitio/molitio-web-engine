import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    /*     output: 'export', */
    transpilePackages: ['@molitio/mwe-ui-core'],
    trailingSlash: false,
    images: {
        unoptimized: true,
        /*         remotePatterns: [
            {
                protocol: 'https',
                hostname: 's3.eu-west-1.amazonaws.com',
                pathname: '/filestore.molitio.org/green-brick/web-content/**',
            },
        ], */
    },
    async headers() {
        return [];
    },
};

export default nextConfig;
