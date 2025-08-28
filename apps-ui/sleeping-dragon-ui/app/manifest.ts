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
            // Add more icons if available in public/
        ],
    };
}
