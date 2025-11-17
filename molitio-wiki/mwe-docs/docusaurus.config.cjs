module.exports = {
    title: 'Molitio Wiki',
    tagline: 'Documentation for Molitio Web Engine',
    url: 'https://molitio.com',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'molitio',
    projectName: 'molitio-web-engine',
    markdown: {
        hooks: {
            onBrokenMarkdownLinks: 'warn',
        },
    },
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    path: './src/design-system',
                    routeBasePath: 'design-system',
                    sidebarPath: require.resolve('./sidebars.cjs'),
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/globals.css'),
                },
            },
        ],
    ],
    themeConfig: {
        navbar: {
            title: 'Molitio Wiki',
            logo: {
                alt: 'Molitio Logo',
                src: 'img/logo.svg',
            },
            items: [
                { to: '/design-system/', label: 'Design System', position: 'left' },
                // No root (/) link to avoid broken links
            ],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Molitio`,
        },
    },
};
