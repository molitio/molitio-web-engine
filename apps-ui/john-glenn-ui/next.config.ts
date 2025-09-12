import { NextConfig } from 'next';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on',
                    },

                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'SAMEORIGIN',
                    },
                    {
                        key: 'Permissions-Policy',
                        value: 'geolocation=()',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'origin-when-cross-origin',
                    },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org https://fonts.googleapis.com https://fonts.gstatic.com ',
                    },
                    {
                        key: 'Content-Security-Policy',

                        value:
                            process.env.NODE_ENV === 'development'
                                ? ``
                                : `
                    default-src 'self';
                    script-src 'self';
                    child-src 'self';
                    style-src 'self';
                    font-src 'self' https://fonts.googleapis.com https://s3.eu-west-1.amazonaws.com/filestore.molitio.org https://fonts.gstatic.com;  
                  `
                                      .replace(/\s{2,}/g, ' ')
                                      .trim(),
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
