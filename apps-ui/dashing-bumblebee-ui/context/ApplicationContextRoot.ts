import { AppContext } from '@molitio/mwe-ui-core';

export const ApplicationContextRoot: AppContext = {
    appName: 'Dashing Bumblebee',
    appLogoUrl: '/logo_v1.svg',
    appLogoAlt: 'Dashing Bumblebee Logo',
    navRoot: {
        home: {
            label: 'Főoldal',
            iconUrl: '/home_icon_svg_v1.svg',
            path: '/',
        },
        services: {
            label: 'Szolgáltatásaink',
            iconUrl: '/settings_v2.svg',
            path: '/services',
        },
        about: {
            label: 'Ajánlat kérés',
            iconUrl: '/request_v2.svg',
            path: '/request',
        },
        contact: {
            label: 'Kapcsolat',
            iconUrl: '/contact_icon_svg_v1.svg',
            path: '/contact',
        }, 
        api: {
            label: 'API',
            path: '/api',
            leafs: {
                email: {
                    label: 'Email API',
                    path: '/api/email',
                },
            },
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
                serviceTheOne: {
                    textContent: {
                        title: 'Miben segítünk Önnek szállítmányozó cégként?',
                    },
                    textContentCollection: [
                        {
                            title: 'Belföldi és nemzetközi fuvarozás',
                            description:
                                'Megszervezzük a rakomány szállítását belföldön és Európa-szerte, optimalizálva az útvonalakat és csökkentve az üresjáratokat.',
                            imageUrl: '',
                            imageAlt: '',
                        },
                        {
                            title: 'Saját flotta:',
                            description:
                                'Road-istics Trans kft: saját flottánk 30 teherautóból áll, 1-33 palettás kapacitással, mely garantálja a kiváló minőséget és pontosságot. Express és speciális fuvarozás is vállalunk. Emellett marketing - és reklámanyagokat is szállítunk és kihelyezünk az ügyfél kérése alapján.',
                            imageUrl: '',
                            imageAlt: '',
                        },
                        {
                            title: 'Rugalmasság',
                            description:
                                'Rugalmasan alkalmazkodunk az Ön igényeihez, -legyen szó sürgős szállításokról vagy speciális fuvarfeladatokról, mindig megtaláljuk a legoptimálisabb megoldást.',
                            imageUrl: '',
                            imageAlt: '',
                        },
                        {
                            title: 'Magas szakmai színvonal',
                            description:
                                'Minden helyzetre fel vagyunk készülve. Tapasztalt csapatunk garantálja a magas színvonalú szolgáltatásokat, így Önt nem érheti váratlan meglepetés.',
                            imageUrl: '',
                            imageAlt: '',
                        },
                        {
                            title: 'Egy ügyintézővel',
                            description:
                                'Egy ügyintézővel intézheti az egész projektet az elejétől a végéig, így jelentősen csökkentjük a hibázási lehetőséget és növeljük a hatékonyságot.',
                            imageUrl: '',
                            imageAlt: '',
                        },
                        {
                            title: 'Folyamatos tájékoztatás',
                            description:
                                'Mindig időben tájékoztatjuk Önt arról, hogy hol tart a rakománya, biztosítva ezzel a teljes átláthatóságot.',
                            imageUrl: '',
                            imageAlt: '',
                        },
                        {
                            title: 'Versenyképes árak',
                            description:
                                'Költséghatékony megoldásokat kínálunk, amelyek segítenek minimalizálni a szállítási költségeket, miközben maximális értéket nyújtunk ügyfeleinknek.',
                            imageUrl: '',
                            imageAlt: '',
                        },
                        {
                            title: 'Ügyfélközpontúság',
                            description:
                                'Függetlenül attól, hogy egyetlen megbízása van, vagy havonta több száz, mindenkit ugyanolyan figyelemmel és prioritással kezelünk.',
                            imageUrl: '',
                            imageAlt: '',
                        },
                    ],
                },
                aboutTheOne: {
                    textContentCollection: [
                        {
                            title: 'Személyre szabott közvetítés a szállítási igények és a megfelelő szállítmányozók között.',
                            description:
                                '25 év szakértelmével és elkötelezettségével állunk rendelkezésére a logisztika és a szállítmányozás területén. Célunk, hogy ügyfeleink számára mindig a legoptimálisabb megoldásokat nyújtsuk, legyen szó belföldi vagy nemzetközi fuvarozásról, raktározásról, vagy vámkezelésről. Fedezze fel szolgáltatásainkat, és válassza a megbízhatóságot!',
                            imageUrl: '/imageSectionTwo.png',
                            imageAlt: '',
                        },
                    ],
                },
                heroTheOne: {
                    textContentCollection: [
                        {
                            title: 'Roadistics Kft.',
                            description: 'A sikerhez vezető út, nálunk kezdődik!',
                            imageUrl: '/logo_v1.svg',
                            imageAlt: 'Unique system',
                        },
                    ],
                },
                heroTheTwo: {
                    textContentCollection: [
                        {
                            title: '25 éve az Ön szolgálatában!',
                            description:
                                'A Road-istics Connect Kft. mögött egy elhivatott, nagy tapasztalattal rendelkező csapat áll. Családi vállalkozásként több mint 25 éve nyújtunk megbízható fuvarozási és logisztikai szolgáltatásokat. Munkatársainkat a megbízhatóság és a szakértelem jellemzi, így ügyfeleinknek a legmagasabb színvonalú szolgáltatásokat biztosítjuk.',
                            imageUrl: '/background_v3.jpg',
                            imageAlt: 'Tematikus',
                        },
                    ],
                },

                coverCards: {
                    textContentCollection: [
                        {
                            title: 'Szállítmányozás',
                            imageUrl: '/export.png',
                            imageAlt: 'Tematikus',
                            description:
                                'Cégünk minden szállítmányozási igényt kielégít, legyen az belföldi vagy nemzetközi fuvarozás. Modern flottánkkal biztosítjuk, hogy rakománya időben megérkezzen.',
                        },
                        {
                            title: 'Raktározás',
                            imageUrl: '/trade.jpg',
                            imageAlt: 'Dinamikus',
                            description:
                                'Innovatív raktározási megoldásokat kínálunk, melyek lehetővé teszik rakománya megfelelő tárolását és kezelését, biztosítva annak megőrzését és elérhetőségét.',
                        },
                        {
                            title: 'Vámkezelés',
                            imageUrl: '/service.jpg',
                            imageAlt: 'Gyors',
                            description:
                                'Gyors és megbízható vámkezelési szolgáltatásainkkal segítjük az import és export folyamatokat, hogy rakománya zökkenőmentesen átjusson a határokon.',
                        },
                    ],
                },
                contactCardCover: {
                    textContentCollection: [
                        {
                            companyName: 'Road-istics Connect Kft',
                            managingDirector: 'Bucsics Zoltán ',
                            phoneNumber: 'Telefonszám: +36 20 413 1238',
                            email: 'Email: zbucsics@roadistics.com',
                            transportationManager: 'Szállítmányozási vezető: Pintér Gabriella',
                            tmPhoneNumber: 'Telefonszám: +36 20 324 8489',
                            tmEmail: 'Email: pgconnect@roadistics.com',
                            freightForwarder: 'Fuvarszervező: Gősi Melinda',
                            ffPhoneNumber: 'Telefonszám: +36 20 380 8236',
                            ffEmail: 'Email: gmconnect@roadistics.com',
                            invoicing: 'info@roadistics.com',
                        },
                        {
                            companyName: 'Road-istics Trans Kft',
                            managingDirector: 'Bucsics Zoltán ',
                            phoneNumber: '+36 20 413 1238',
                            email: 'zbucsics@roadistics.com',
                            transportationManager: 'Flotta iránytó: Hoványiné Tóth Zsuzsanna',
                            tmPhoneNumber: 'Telefonszám: +36 20 242 4698',
                            tmEmail: 'Email: htzsconnect@roadistics.com',
                            invoicing: 'info@roadistics.com',
                        }
                        
                    ],
                },
                imageCards: {
                    textContentCollection: [
                        {
                            imageUrl: '/fast.svg',
                            imageAlt: '',
                        },
                        {
                            imageUrl: '/fast.svg',
                            imageAlt: '',
                        },
                        {
                            imageUrl: '/fast.svg',
                            imageAlt: '',
                        },
                        {
                            imageUrl: '/fast.svg',
                            imageAlt: '',
                        },
                        {
                            imageUrl: '/fast.svg',
                            imageAlt: '',
                        },
                        {
                            imageUrl: '/fast.svg',
                            imageAlt: '',
                        },
                        {
                            imageUrl: '/fast.svg',
                            imageAlt: '',
                        },
                    ],
                },
                imageSectionOne: {
                    textContentCollection: [
                        {
                            imageUrl: '/highWayOne.png',
                            imageAlt: '',
                        },
                    ],
                },
                imageSectionTwo: {
                    textContentCollection: [
                        {
                            imageUrl: '/highWayOne.png',
                            imageAlt: '',
                        },
                    ],
                },
                imageSectionThree: {
                    textContentCollection: [
                        {
                            imageUrl: '/highway.jpg',
                            imageAlt: '',
                        },
                    ],
                },
                infoPanels: {
                    textContentCollection: [
                        {
                            title: 'Spedíció',
                            description:
                                'Költséghatékonyan oldjuk meg fuvarfeladatait, beleértve az expressz fuvarokat is. Sürgős esetben, akár 24 órán belüli szállítást is vállalunk, továbbá egyedi megrendelés esetén is állunk rendelkezésére. ',
                            imageUrl: '',
                            imageAlt: '',
                        },
                        {
                            title: 'Vámszolgáltatások',
                            description:
                                'Komplex vámkezelési szolgáltatásokat nyújtunk, hogy rakománya zökkenőmentesen átjusson a határokon. Hatékonyan intézzük az import és export vámkezeléseket, hogy minél előbb kiadhassuk a szükséges engedélyeket.',
                            imageUrl: '',
                            imageAlt: '',
                        },
                        {
                            title: 'Raktározás',
                            description:
                                'Biztonságos és korszerű raktározási megoldásokat kínálunk, melyek lehetővé teszik rakománya megfelelő tárolását és kezelését. Szolgáltatásaink az általános raktározástól kezdve, a speciális igények kielégítéséig terjednek.',
                            imageUrl: '',
                            imageAlt: '',
                        },
                    ],
                },
            },
        },
        contact: {
            leafs: {
                contactForm: {
                    textContent: {
                        recaptchaTag: 'CONTACT_FORM',
                        title: 'Kapcsolat',
                    },
                },
            },
        },
    },
};
