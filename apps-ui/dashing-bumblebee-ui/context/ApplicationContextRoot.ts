export const ApplicationContextRoot = {
    appName: 'Dashing Bumblebee',
    navRoot: {
        home: {
            label: 'Főoldal',
            path: '/',
        },
    },
    contentRoot: {
        common: {
            leafs: {
                app: {
                    textContent: {
                        appTitle: 'Roadistics',
                        appDescription: 'Mozdítsa meg a világot velünk!',
                    },
                    assetUrls: {
                        logoSvg: '/logo_v1.svg',
                    },
                },
                footer: {
                    textContent: {
                        maintainer: `© 2023 All Rights Reserved | molitio llc | Dashing Bumblebee v0.1.0"`,
                    },
                },
            },
        },
        home: {
            leafs: {
                cover: {
                    textContent: {
                        title: 'Mozdítsa meg a világot velünk!',
                        subTitle:
                            'Személyre szabott közvetítés a szállítási igények és a megfelelő szállítmányozók között.',
                        subTitle2: 'Egy kattintás a megoldásra.',
                        ctaPhone: 'Telefon',
                        ctaEmail: 'Email',
                        phoneNumber: '+36 20 413 1238',
                        infoEmail: 'infoconnect@roadistics.com',
                    },
                    assetUrls: {
                        infoEmailHref: 'mailto:infoconnect@roadistics.com',
                        phoneNumberHref: 'tel:+36204131238',
                        backgroundImage: '/background_combined.png',
                    },
                },
            },
        },
    },
};
