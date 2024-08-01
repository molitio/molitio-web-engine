import { AppContext } from '@molitio/ui-core';

export const ApplicationContextRoot: AppContext = {
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
                        backgroundImage: {
                            src: '/background_combined.png',
                            alt: 'Background',
                        },
                    },
                },
                heroTheTwo: {
                    textContentCollection: [
                        {
                        title: '25 éve az Ön szolgálatában!',
                        description:
                            'Üdvözöljük a Road-istics Connect Kft. weboldalán, ahol 25 év szakértelmével és elkötelezettségével állunk rendelkezésére a logisztika és a szállítmányozás területén. Célunk, hogy ügyfeleink számára mindig a legoptimálisabb megoldásokat nyújtsuk, legyen szó belföldi vagy nemzetközi fuvarozásról, raktározásról, vagy vámkezelésről. Fedezze fel szolgáltatásainkat, és válassza a megbízhatóságot!',
                        imageUrl: 'background_combined.png',
                        imageAlt: 'Tematikus',
                }],
                },
                heroTheOne: {
                    textContentCollection: [
                        {
                        title: 'Roadistics Kft.',
                        description: 'A sikerhez vezető út, nálunk kezdődik!',
                        imageUrl: 'background_combined.png',
                        imageAlt: 'Unique system',
                    }
                    ],
                },
                coverCards: {
                    textContentCollection: [
                        {
                            title: 'Teljes körű szállítmányozás',
                            imageUrl: 'ware.svg',
                            imageAlt: 'Tematikus',
                            description:
                                'Cégünk minden szállítmányozási igényt kielégít, legyen az belföldi vagy nemzetközi fuvarozás. Modern flottánkkal biztosítjuk, hogy rakománya időben megérkezzen.',
                        },
                        {
                            title: 'Vámkezelés',
                            imageUrl: 'fast.svg',
                            imageAlt: 'Gyors',
                            description:
                                'Gyors és megbízható vámkezelési szolgáltatásainkkal segítjük az import és export folyamatokat, hogy rakománya zökkenőmentesen átjusson a határokon.',
                        },
                        {
                            title: 'Raktározás',
                            imageUrl: 'fast.svg',
                            imageAlt: 'Dinamikus',
                            description:
                                'Innovatív raktározási megoldásokat kínálunk, melyek lehetővé teszik rakománya megfelelő tárolását és kezelését, biztosítva annak megőrzését és elérhetőségét.',
                        },
                    ],
                },
                coverCardsSecondary: {
                    textContentCollection: [
                        {
                            title: '„A megrendelt fuvar gyorsan és pontosan érkezett, a csapat pedig mindig készségesen válaszolt a kérdéseinkre. Különösen értékelem a gyors reakcióidőt és a rugalmasságot, ami tapasztalataim alapján ritka ezen a területen.”',
                            imageUrl: 'fast.svg',
                            description: ' - Kovács István',
                        },
                        {
                            title: '„A csapat munkája jelentősen megkönnyítette az export-import folyamatainkat. A vámkezelés gyors és gördülékeny volt, minden dokumentumot időben elkészítettek és benyújtottak. A szakértelmük maximálisan meggyőző volt, így biztos vagyok benne, hogy a jövőben is rájuk bízzuk ezt a feladatot.”',
                            imageUrl: 'fast.svg',
                            description: ' - Vincze Áron ',
                        },
                        {
                            title: '„A Road-istics raktározási megoldásai minden szempontból meghaladták az elvárásainkat. A raktár biztonságos és jól karbantartott, az áruk kezelése pedig precíz és szakszerű. Különösen tetszett, hogy lehetővé tették a valós idejű nyomon követést.”',
                            imageUrl: 'fast.svg',
                            description: ' - Nagy Károly',
                        },
                    ],
                },
                verticalCards: {
                    textContentCollection: [
                        {
                            title: 'Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.',
                            imageUrl: 'ware.svg',
                            imageAlt: 'Tematikus',
                            
                        },
                    ],
                },
                infoPanels: {
                    textContentCollection: [
                        {
                            title: 'Spedíció',
                            description: 'Költséghatékonyan oldjuk meg fuvarfeladatait, beleértve az expressz fuvarokat is. Sürgős esetben, akár 24 órán belüli szállítást is vállalunk, továbbá egyedi megrendelés esetén is állunk rendelkezésére. ',
                        },
                        {
                            title: 'Vámszolgáltatások',
                            description: 'Komplex vámkezelési szolgáltatásokat nyújtunk, hogy rakománya zökkenőmentesen átjusson a határokon. Hatékonyan intézzük az import és export vámkezeléseket, hogy minél előbb kiadhassuk a szükséges engedélyeket.',
                        },
                        {
                            title: 'Raktározás',
                            description: 'Biztonságos és korszerű raktározási megoldásokat kínálunk, melyek lehetővé teszik rakománya megfelelő tárolását és kezelését. Szolgáltatásaink az általános raktározástól kezdve, a speciális igények kielégítéséig terjednek.',
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
