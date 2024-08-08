import { AppContext } from '@molitio/ui-core';
import { describe } from 'node:test';

export const ApplicationContextRoot: AppContext = {
    appName: 'Dashing Bumblebee',
    appLogoUrl: './logo_v1.svg',
    appLogoAlt: 'Dashing Bumblebee Logo',
    navRoot: {
        home: {
            label: 'Főoldal',
            iconUrl: './home2.png',
            path: '/',
        },
        services: {
            label: 'Szolgáltatásaink',
            iconUrl: './settings2.png',
            path: '/services',
        },
        about: {
            label: 'Rólunk',
            iconUrl: './information.png',
            path: '/about',
        },
        contact: {
            label: 'Kapcsolat',
            iconUrl: './contact2.png',
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
                serviceTheOne: {
                    textContentCollection: [
                        {
                        title: 'Teljes körű szállítmányozás',
                        description: 'Szállítmányozó cégként minden logisztikai igényét kielégítjük, legyen szó belföldi vagy nemzetközi fuvarozásról. Rugalmasan és gyorsan reagálunk a megkeresésekre,- egyedi fuvarokat és expressz szállításokat is vállalunk, akár 24 órán belüli kiérkezéssel is. Célunk, hogy a mögöttünk álló technológia gyorsan és hatékonyan kiszolgálja a változó üzleti igényeket, biztosítva a maximális hatékonyságot az Ön sikere érdekében.',
                        imageUrl: '',
                        imageAlt: '',

                        
                    },
                    {
                        title: 'Raktározás',
                        description: 'Innovatív raktározási megoldásokat kínálunk, melyek lehetővé teszik rakománya megfelelő tárolását és kezelését, biztosítva annak megőrzését és elérhetőségét.',
                        imageUrl: '',
                        imageAlt: '',
                        
                    },
                    {
                        title: 'Egyedi megoldások',
                        description: 'Különleges fuvarokat is vállalunk, akár express szállítással, 24 órán belüli kiérkezéssel. Rugalmas ügyfélszolgálatunk segítségével hétfőtől péntekig minden egyedi igényt teljesítünk.',
                        imageUrl: '',
                        imageAlt: '',
                        
                    },
                    {
                        title: 'Gyors reakcióidő',
                        description: 'Számunkra a gyors reakció elengedhetetlen. Ha hétköznap délig leadja ajánlatkérését, másnap délig válaszolunk, biztosítva a gyors szállítást.',
                        imageUrl: '',
                        imageAlt: '',
                    },

                ],
                },
                aboutTheOne: {
                    textContentCollection: [
                        {
                            title: '',
                            description: '',
                            imageUrl: '',
                            imageAlt: '',
                        },
                    ],
                },
                heroTheTwo: {
                    textContentCollection: [
                        {
                        title: '25 éve az Ön szolgálatában!',
                        description:
                            'Üdvözöljük a Road-istics Connect Kft. weboldalán, ahol 25 év szakértelmével és elkötelezettségével állunk rendelkezésére a logisztika és a szállítmányozás területén. Célunk, hogy ügyfeleink számára mindig a legoptimálisabb megoldásokat nyújtsuk, legyen szó belföldi vagy nemzetközi fuvarozásról, raktározásról, vagy vámkezelésről. Fedezze fel szolgáltatásainkat, és válassza a megbízhatóságot!',
                        imageUrl: 'truck2.png',
                        imageAlt: 'Tematikus',
                }],
                },
                heroTheOne: {
                    textContentCollection: [
                        {
                        title: 'Roadistics Kft.',
                        description: 'A sikerhez vezető út, nálunk kezdődik!',
                        imageUrl: 'roadCover3.png',
                        imageAlt: 'Unique system',
                    }
                    ],
                },
                coverCards: {
                    textContentCollection: [
                        {
                            title: 'Teljes körű szállítmányozás',
                            imageUrl: 'truck4.png',
                            imageAlt: 'Tematikus',
                            description:
                                'Cégünk minden szállítmányozási igényt kielégít, legyen az belföldi vagy nemzetközi fuvarozás. Modern flottánkkal biztosítjuk, hogy rakománya időben megérkezzen.',
                        },
                        {
                            title: 'Vámkezelés',
                            imageUrl: 'store3.svg',
                            imageAlt: 'Gyors',
                            description:
                                'Gyors és megbízható vámkezelési szolgáltatásainkkal segítjük az import és export folyamatokat, hogy rakománya zökkenőmentesen átjusson a határokon.',
                        },
                        {
                            title: 'Raktározás',
                            imageUrl: 'store4.png',
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
                            imageAlt: '',
                            description: ' - Kovács István',
                        },
                        {
                            title: '„A csapat munkája jelentősen megkönnyítette az export-import folyamatainkat. A vámkezelés gyors és gördülékeny volt, minden dokumentumot időben elkészítettek és benyújtottak. A szakértelmük maximálisan meggyőző volt, így biztos vagyok benne, hogy a jövőben is rájuk bízzuk ezt a feladatot.”',
                            imageUrl: 'fast.svg',
                            imageAlt: '',
                            description: ' - Vincze Áron ',
                        },
                        {
                            title: '„A Road-istics raktározási megoldásai minden szempontból meghaladták az elvárásainkat. A raktár biztonságos és jól karbantartott, az áruk kezelése pedig precíz és szakszerű. Különösen tetszett, hogy lehetővé tették a valós idejű nyomon követést.”',
                            imageUrl: 'fast.svg',
                            imageAlt: '',
                            description: ' - Nagy Károly',
                        },
                    ],
                },
                imageCards: {
                    textContentCollection: [
                        {
                            imageUrl: './fast.svg',
                            imageAlt: '',
                            
                        },
                        {
                            imageUrl: './fast.svg',
                            imageAlt: '',
                            
                        },
                        {
                            imageUrl: './fast.svg',
                            imageAlt: '',
                            
                        },
                        {
                            imageUrl: './fast.svg',
                            imageAlt: '',
                            
                        },
                        {
                            imageUrl: './fast.svg',
                            imageAlt: '',
                            
                        },
                        {
                            imageUrl: './fast.svg',
                            imageAlt: '',
                            
                        },
                        {
                            imageUrl: './fast.svg',
                            imageAlt: '',
                            
                        },
                    ],
                },
                imageSectionOne:{
                    textContentCollection: [
                        {
                            imageUrl: 'imageSectionOne.png',
                            imageAlt: '',
                        },
                    ],
                },
                imageSectionTwo:{
                    textContentCollection: [
                        {
                            imageUrl: 'imageSectionTwo.png',
                            imageAlt: '',
                        },
                    ],
                },
                imageSectionThree:{
                    textContentCollection: [
                        {
                            imageUrl: 'imageSectionThree.png',
                            imageAlt: '',
                        },
                    ],
                },
                infoPanels: {
                    textContentCollection: [
                        {
                            title: 'Spedíció',
                            description: 'Költséghatékonyan oldjuk meg fuvarfeladatait, beleértve az expressz fuvarokat is. Sürgős esetben, akár 24 órán belüli szállítást is vállalunk, továbbá egyedi megrendelés esetén is állunk rendelkezésére. ',
                            imageUrl: '',
                            imageAlt: '',
                        },
                        {
                            title: 'Vámszolgáltatások',
                            description: 'Komplex vámkezelési szolgáltatásokat nyújtunk, hogy rakománya zökkenőmentesen átjusson a határokon. Hatékonyan intézzük az import és export vámkezeléseket, hogy minél előbb kiadhassuk a szükséges engedélyeket.',
                            imageUrl: '',
                            imageAlt: '',
                        },
                        {
                            title: 'Raktározás',
                            description: 'Biztonságos és korszerű raktározási megoldásokat kínálunk, melyek lehetővé teszik rakománya megfelelő tárolását és kezelését. Szolgáltatásaink az általános raktározástól kezdve, a speciális igények kielégítéséig terjednek.',
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
                        title: 'Kapcsolat',
                    },
                },
            },
        },
    },
};
