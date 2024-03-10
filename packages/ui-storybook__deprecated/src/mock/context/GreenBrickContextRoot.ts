export const GreenBrickContextRoot = {
    appName: 'GreenBrick',
    navRoot: {
        home: { label: 'FŐOLDAL', path: '#home' },
        services: { label: 'SZOLGÁLTATÁSOK', path: '#services' },
        about: { label: 'RÓLUNK', path: '#about' },
        contact: { label: 'KAPCSOLAT', path: '#contact' },
    },
    contentRoot: {
        home: {
            leafs: {
                hero: {
                    textContent: {
                        title: 'MEGBÍZHATÓSÁG, SZAKÉRTELEM',
                        description: 'BÍZZA OTTHONÁT, GYORS, PRECIZ, HOZZÁÉRTŐ SZAKEMBEREKRE!',
                        callToAction: `KAPCSOLATFELVÉTEL`,
                    },
                    assetUrls: {
                        heroImage:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/hero.jpg',
                    },
                },
            },
        },
        services: {
            leafs: {
                contentCards: {
                    cardContentCollection: [
                        {
                            title: 'ÚJ ÉPÍTÉS',
                            content: 'Amennyiben egy teljesen új ház építését tervezi, keressen bennünket bizalommal!',
                            url: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/hammer.png',
                        },
                        {
                            title: 'BŐVÍTÉS',
                            content:
                                'Épületbővítés, hozzáépítés gyakori munkafolyamataink egyike. Bízza ránk otthonát bátran!',
                            url: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/paintroller.png',
                        },
                        {
                            title: 'KERÍTÉS ÉPÍTÉS',
                            content:
                                'Olyan kivitelezőt keres, aki kerítésépítéssel is foglalkozik? A beszerzéstől a beépítésig számíthat ránk!',
                            url: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/tile.png',
                        },
                        {
                            title: 'GENERÁL KIVITELEZÉS',
                            content:
                                'Az építkezés minden munkafolyamatát vállaljuk a tervezéstől a kulcsrakész állapotig megbízható szakemberekkel!',
                            url: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/icons/drill.png',
                        },
                    ],
                    textContent: {
                        title: 'SZOLGÁLTATÁSAINK',
                    },
                },
            },
        },
        introduction: {
            leafs: {
                introduction: {
                    textContent: {
                        introductionText: `„ A legtöbb munkánkat személyes ajánlás alapján kapjuk, mivel minden 
munkánkat úgy végezzük mintha magunknak csinálnánk! ”
`,
                        signatureText: `- Idézet a Brüder Bau Kft. munkatársától`,
                    },
                    assetUrls: {
                        introductionImageUrl:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/constructor.jpg',
                    },
                },
            },
        },
        about: {
            leafs: {
                aboutHero: {
                    textContent: {
                        title: 'RÓLUNK',
                        aboutText: `A fellendülő piacnak köszönhetően az elmúlt években lehetőségünk 
adódott több, igazán nagyszerű projektet véghez vinni! Lendületünk azóta 
is töretlen, legtöbb megbízásunkat ajánlás útján szereztük. 
Szolgáltatásaink között szerepelnek új házak építése, lakóházak bővítése, 
generál kivitelezés és családi házak szerkezet építése is. Legutóbbi az ami 
mind közül a leglátványosabb rész, így bátran kijelenthetjük, hogy ezt a 
folyamatot szeretjük a legjobban!`,
                    },
                    assetUrls: {
                        aboutImage:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/logo/logo_white.svg',
                    },
                },
            },
        },
        contact: {
            leafs: {
                contactInfo: {
                    textContent: {
                        title: `KAPCSOLAT`,
                        phoneMain: `+36 20 560 3031`,
                        phoneSecondary: `+36 20 281 2233`,
                        email: 'bruderbau2021@gmail.com',
                        address: '2030 Érd, Járom utca 10.',
                    },
                    assetUrls: {
                        backgroundImage:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/img/circularsaw.jpg',
                        phoneMainIcon:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/contact-icons/mobilephone.svg',
                        phoneMainHref: 'tel:+36205603031',
                        phoneSecondaryIcon:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/contact-icons/mobilephone.svg',
                        phoneSecondaryHref: 'tel:+36202812233',
                        emailIcon:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/contact-icons/envelope.svg',
                        emailHref: 'mailto:bruderbau2021@gmail.com',
                        addressIcon:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/contact-icons/house.svg',
                        addressHref: 'https://goo.gl/maps/3ESf9okiXnXuTHFq7',
                        logo: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/green-brick/web-content/logo/logo_white.svg',
                    },
                },
            },
        },
        footer: {
            leafs: {
                maintainer: {
                    textContent: {
                        maintainer: `© 2022 All Rights Reserved | molitio llc. - ${'sleeping dragon app story'}`,
                    },
                },
            },
        },
    },
};
