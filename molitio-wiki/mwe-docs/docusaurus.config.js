module.exports = {
    title: 'Molitio Wiki',
    tagline: 'Documentation for Molitio Web Engine',
    url: 'https://your-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'molitio',
    projectName: 'molitio-web-engine',
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },
    presets: [
        [
            'classic',
            {
                docs: {
                    path: '../design-system',
                    routeBasePath: 'design-system',
                    sidebarPath: require.resolve('./sidebars.js'),
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/tailwind.css'),
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
            items: [{ to: '/design-system/', label: 'Design System', position: 'left' }],
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} Molitio`,
        },
    },
};
