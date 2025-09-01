import { AppContext } from '@molitio/mwe-ui-core';

export const Context: AppContext = {
    appId: 'sleeping-dragon-ui',
    appName: '@molitio/mwe-sleeping-dragon-ui',
    appDisplayTitle: 'Molitio',
    nodeTree: {
        v1: {
            resourceId: 'v1',
            type: 'nav',
            navigation: {
                path: '/v1',
                label: 'V1',
            },
            nodeTree: {
                about: {
                    resourceId: 'about',
                    type: 'nav',
                    navigation: {
                        path: '/about',
                        label: 'About',
                    },
                    textContent: {
                        main: {
                            en: { textContent: 'About Our Mission' },
                            hu: { textContent: 'Küldetésünk' },
                        },
                        description: {
                            en: {
                                textContent:
                                    'Molitio is an open-source initiative focused on building digital solutions for resource distribution, sustainability, and community empowerment. We believe in transparency, collaboration, and creating tools that benefit everyone.',
                            },
                            hu: {
                                textContent:
                                    'A Molitio egy nyílt forráskódú kezdeményezés, amely digitális megoldásokat fejleszt az erőforrás-elosztás, fenntarthatóság és közösségi felhatalmazás érdekében. Hiszünk az átláthatóságban, az együttműködésben és olyan eszközök létrehozásában, amelyek mindenki javát szolgálják.',
                            },
                        },
                    },
                },
                landing: {
                    resourceId: 'landing',
                    type: 'nav',
                    navigation: {
                        path: '/landing',
                        label: 'Molitio Resource Hub',
                    },
                    textContent: {
                        main: {
                            en: { textContent: 'Molitio Resource Hub' },
                            hu: { textContent: 'Molitio Erőforrás Központ' },
                        },
                        subtitle: {
                            en: { textContent: 'The first open-source engine for public resource distribution.' },
                            hu: { textContent: 'Az első nyílt forráskódú motor a közösségi erőforrás-elosztáshoz.' },
                        },
                        description: {
                            en: {
                                textContent:
                                    'Molitio is dedicated to building digital tools that serve humanity. Our Resource Hub connects needs and contributions, helping communities share and optimize resources for a better world. Join us in shaping a more sustainable, connected future.',
                            },
                            hu: {
                                textContent:
                                    'A Molitio elkötelezett abban, hogy digitális eszközöket fejlesszen az emberiség szolgálatában. Erőforrás Központunk összeköti a szükségleteket és a hozzájárulásokat, segítve a közösségeket az erőforrások megosztásában és optimalizálásában egy jobb világért. Csatlakozz hozzánk egy fenntarthatóbb, összekapcsolt jövőért!',
                            },
                        },
                    },
                },
            },
        },
    },
};
