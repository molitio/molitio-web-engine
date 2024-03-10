export const ChampagneSwanContextRoot = {
    appName: 'champagne swan story app',
    navRoot: {
        home: {
            label: 'Home',
            path: '/',
        },
    },
    contentRoot: {
        home: {
            leafs: {
                hero: {
                    textContent: {
                        title: 'TISZTASÁG FELSŐFOKON!',
                        /* title: 'CONSECTETUR ADIPISCING.', */
                        description: `Cégünk magas színvonalon kínál \n takarító szolgáltatást szállodák, irodaházak és magánszemélyek részére,
valamint vállaljuk nagy belmagasságú ipari üzemek, gyártó csarnokok, raktárak és logisztikai központok speciális takarítását!`,
                        /* 'Lorem ipsums dolor sit amet, consectetur adipiscing elit. Nam vitae orci tempor, aliquam erat in, lacinia elit. Mauris vitae vulputate urna, ac bibendum mauris. Fusce finibus risus vitae massa convallis finibus. Vivamus gravida orci vel libero convallis accumsan.', */
                        desciptionSubText: `Oldalunk fejlesztés alatt áll, kérjük látogass vissza később, 
vagy vedd fel velünk a kapcsolatot az alábbi elérhetőségek egyikén!`,
                        /* desciptionSubText: `Quisque ut metus pulvinar justo ullamcorper tincidunt. Nam tincidunt turpis tortor. Pellentesque nec vehicula sem. Cras laoreet euismod leo in fringilla. Etiam eget.`, */
                    },
                    iconDefinitions: {
                        phone: {
                            title: 'Phone',
                            url: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/icons/icons_jeliza-01.svg',
                            hrefUrl: 'tel:+36999999999',
                        },
                        email: {
                            title: 'Email',
                            url: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/icons/icons_jeliza_phone.svg',
                            hrefUrl: 'mailto:web-dev@molitio.com',
                        },
                        address: {
                            title: 'Address',
                            url: 'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/icons/icons_jeliza_envelope.svg',
                            hrefUrl: 'https://goo.gl/maps/wPiPuYZaD9W8rmQK8',
                        },
                    },
                    assetUrls: {
                        heroBackground:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/img/hero.jpeg',
                        effectLayer:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/img/jeliza_hero_gradient.svg',
                    },
                },
            },
        },
        nav: {
            leafs: {
                contacts: {
                    textContent: {
                        email: 'web-dev@molitio.com',
                        phoneMain: '+36 30 123 4567',
                        address: `1234. Budapest,
                                    Példa utca 12.`,
                    },
                    assetUrls: {
                        emailHref: 'mailto:web-dev@molitio.com',
                        webSiteHref: 'https://molitio.com',
                        phoneMainHref: 'tel:+36999999999',
                        phoneSecondaryHref: 'tel:+36999999999',
                        addressHref: 'https://goo.gl/maps/wPiPuYZaD9W8rmQK8',
                        logoImage:
                            'https://s3.eu-west-1.amazonaws.com/filestore.molitio.org/champagne-swan/web-content/logo/jeliza_logo_horizontal_jeliza_logo_horizontal.svg',
                    },
                },
            },
        },
        footer: {
            leafs: {
                maintainer: {
                    textContent: {
                        maintainer: `© 2022 All Rights Reserved | molitio llc. - ${'champagne swan app story'}`,
                    },
                },
            },
        },
    },
};
