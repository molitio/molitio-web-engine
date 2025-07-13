import { AppContext } from '@molitio/mwe-ui-core';

export const Context: AppContext = {
    appName: '@molitio/mwe-sleeping-dragon-ui',
    appId: 'sleeping-dragon-ui',
    nodeTree: {
        root: {
            resourceId: 'root',
            type: 'nav',
            navigation: {
                path: '/',
                label: 'Home',
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
                            contentTitle: 'About Our Mission',
                            textContent: {
                                description:
                                    'Molitio is an open-source initiative focused on building digital solutions for resource distribution, sustainability, and community empowerment. We believe in transparency, collaboration, and creating tools that benefit everyone.',
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
                            contentTitle: 'Molitio Resource Hub',
                            textContent: {
                                subtitle: 'The first open-source engine for public resource distribution.',
                                description:
                                    'Molitio is dedicated to building digital tools that serve humanity. Our Resource Hub connects needs and contributions, helping communities share and optimize resources for a better world. Join us in shaping a more sustainable, connected future.',
                            },
                        },
                    },
                },
            },
        },
    },
};
