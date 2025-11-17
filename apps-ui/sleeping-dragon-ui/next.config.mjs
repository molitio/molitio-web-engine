import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    transpilePackages: ['@molitio/mwe-ui-core'],
    outputFileTracingRoot: path.resolve(__dirname, '../..'),
    trailingSlash: false,
    basePath: '/v1',
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
