import { AppContext } from '@molitio/ui-core';

export const ApplicationContextRoot = {
    appName: 'Dashing Bumblebee',
    appLogoUrl: './logo_v1.svg',
    appLogoAlt: 'Dashing Bumblebee Logo',
    navRoot: {
        home: {
            label: 'Főoldal',
            iconUrl: './lamp.svg',
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
                        logoSvg: {
                            src: '/ logo_v1.svg',
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
                    refLinkUrls: {
                        infoEmailHref: { url: 'mailto:infoconnect@roadistics.com' },
                        phoneNumberHref: { url: 'tel:+36204131238' },
                    },
                    assetUrls: {
                        backgroundImage: { src: '/background_combined.png' },
                    },
                },
                heroTheTwo: {
                    heroTheTwoContent: [
                        {
                            title: 'A sikerhez vezető út, nálunk kezdődik!',
                            description:
                                'Üdvözöljük a Road-istics Connect Kft. weboldalán, ahol 25 év szakértelmével és elkötelezettségével állunk rendelkezésére a logisztika és a szállítmányozás területén. Célunk, hogy ügyfeleink számára mindig a legoptimálisabb megoldásokat nyújtsuk, legyen szó belföldi vagy nemzetközi fuvarozásról, raktározásról, vagy vámkezelésről. Fedezze fel szolgáltatásainkat, és válassza a megbízhatóságot!',
                            imageUrl: 'background_combined.png',
                            imageAlt: 'Tematikus',
                        },
                    ],
                },
                heroTheOne: {
                    heroTheOneContent: [
                        {
                            title: 'Roadistics Kft.',
                            description: 'Logistical Solutions',
                            imageUrl: 'background_combined.png',
                            imageAlt: 'Unique system',
                        },
                    ],
                },
                coverCards: {
                    cardContent: [
                        {
                            title: 'Belföldi és Nemzetközi Fuvarozás',
                            imageUrl: 'ware.svg',
                            imageAlt: 'Tematikus',
                            description:
                                'Cégünk fő tevékenysége a túlméretes áruszállítás. Flottánk 80%-a alkalmas a célra.',
                        },
                        {
                            title: 'Túlméretes Áruszállítás',
                            imageUrl: 'fast.svg',
                            imageAlt: 'Gyors',
                            description:
                                'Cégünk fő tevékenysége a túlméretes áruszállítás. Flottánk 80%-a alkalmas a célra, így a legkülömbözőbb méretű feladatokat is eltudjuk látni.',
                        },
                        {
                            title: 'Szállítmányozás',
                            imageUrl: 'fast.svg',
                            imageAlt: 'Dinamikus',
                            description:
                                'Cégünk fő tevékenysége a túlméretes áruszállítás. Flottánk 80%-a alkalmas a célra, így a legkülömbözőbb méretű feladatokat is eltudjuk látni.',
                        },
                    ],
                    cardContentTheTwo: [
                        {
                            title: '180',
                            imageUrl: '',
                            description: 'Dolgozó',
                        },
                        {
                            title: '25 év',
                            imageUrl: '',
                            description: 'Tapasztalat',
                        },
                        {
                            title: '130',
                            imageUrl: '',
                            description: 'Gépjármű',
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
                infoPanels: {
                    infoPanelContent: [
                        {
                            title: 'Túlméretes Áruszállítás',
                            description: 'valami szöveget rakunk ide ',
                        },
                        {
                            title: 'Szállítmányozás',
                            description: 'valami szöveget rakunk ide ',
                        },
                        {
                            title: 'Túlméretes Áruszállítás',
                            description: 'valami szöveget rakunk ide ',
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
