import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Molitio',
        short_name: 'Molitio',
        description:
            'Sleeping Dragon is the commercial front-end for Molitio.com, providing a powerful, intuitive, and user-friendly interface for commercial users.',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#0a1a2f',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
            {
                src: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/favicon-16x16.png',
                sizes: '16x16',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/apple-touch-icon.png',
                sizes: '180x180',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/favicon.ico',
                sizes: '48x48',
                type: 'image/x-icon',
                purpose: 'any',
            },
        ],
    };
}
