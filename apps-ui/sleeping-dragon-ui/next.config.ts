import path from 'path';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    transpilePackages: ['@molitio/mwe-ui-core'],
    outputFileTracingRoot: path.resolve(__dirname, '../..'),
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
