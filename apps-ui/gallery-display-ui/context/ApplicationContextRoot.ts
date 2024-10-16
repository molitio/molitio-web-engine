import { AppContext, ResourceGalleryRoot } from '@molitio/mwe-ui-core';

export const ApplicationContextRoot: AppContext = {
    appName: 'Gallery Display',
    navRoot: {
        home: {
            label: 'Főoldal',
            iconUrl: 'vite.svg',
            path: '/',
        },
        message: {
            label: 'Ajánlat kérés',
            iconUrl: 'vite.svg',
            path: '/',
        },
        about: {
            label: 'Rólunk',
            iconUrl: 'vite.svg',
            path: '/about',
        },
        contact: {
            label: 'Kapcsolat',
            iconUrl: 'vite.svg',
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
                        logo: {
                            src: '/logo_v1.svg',
                            alt: 'Logo',
                        },
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
                        infoEmailHref: { src: 'mailto:infoconnect@roadistics.com' },
                        phoneNumberHref: { src: 'tel:+36204131238' },
                        backgroundImage: { src: '/background_combined.png' },
                    },
                },
                showcaseCards: {
                    textContentCollection: [
                        {
                            title: 'Tematikus',
                            subTitle: 'lorem ipsum dolor sit amet',
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
    resourceGalleryRoot: {
        drills: {
            name: 'dirlls',
            leafs: {
                dirll1: {
                    title: 'dirll1 title',
                    subTitle: 'lorem ipsum dolor sit amet',
                },
                drill2: {
                    title: 'drill2 title',
                    subTitle: 'lorem ipsum dolor sit amet',
                },
            },
            branches: {
                electricDrill: {
                    name: 'electricDrills',
                    leafs: {
                        dirll3: {
                            title: 'dirll3 title',
                            subTitle: 'lorem ipsum dolor sit amet',
                        },
                        dirll4: {
                            title: 'dirll4 title',
                            subTitle: 'lorem ipsum dolor sit amet',
                        },
                    },
                    branches: {
                        batteryDrills: {
                            name: 'battery drills',
                            leafs: {
                                bateryDrill1: {
                                    title: 'bateryDrill1 title',
                                    subTitle: 'lorem ipsum dolor sit amet',
                                },
                                bateryDrill2: {
                                    title: 'bateryDrill1 title',
                                    subTitle: 'lorem ipsum dolor sit amet',
                                },
                            },
                        },
                    },
                },
            },
        },
        mixer: {
            name: 'mixer',
            leafs: {
                mixer1: {
                    title: 'mixer1 title',
                    subTitle: 'lorem ipsum dolor sit amet',
                },
                mixer2: {
                    title: 'mixer2 title',
                },
            },
        },
    },
};
