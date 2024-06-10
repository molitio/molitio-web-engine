export const ApplicationContextRoot = {
    appName: 'Dashing Bumblebee',
    navRoot: {
        home: {
            label: 'Főoldal',
            icon: 'planet.svg',
            path: '/',
        },
        message: {
            label: 'Ajánlat kérés',
            icon: 'request.svg',
            path: '/',
        },
        about: {
            label: 'Rólunk',
            icon: 'lamp.svg',
            path: '/about',
        },
        contact: {
            label: 'Kapcsolat',
            icon: 'document.svg',
            path: '/contact',
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
                        maintainer: `© 2024 All Rights Reserved | molitio llc | Dashing Bumblebee v0.1.0`,
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
                coverCards: {
                    cardContent: [
                        {
                            title: 'Tematikus',
                            imageUrl: 'ware.svg',
                            imageAlt: 'Tematikus',
                        },
                        {
                            title: 'Gyors',
                            imageUrl: 'fast.svg',
                            imageAlt: 'Gyors',
                        },
                        {
                            title: 'Dinamikus',
                            imageUrl: 'accu.svg',
                            imageAlt: 'Dinamikus',
                        },
                    ],
                },
                verticalCards: {
                    verticalCardContent: [
                        {
                            title: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
                            imageUrl: 'ware.svg',
                            imageAlt: 'Tematikus',
                        },
                    ],
                },
            },
        },
        contact: {
            leafs: {
                contactForm: {
                    textContent: {
                        title: 'Kapcsolat',
                    },
                },
            },
        },
    },
};
