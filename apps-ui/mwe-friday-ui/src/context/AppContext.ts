import type { AppContext } from '@molitio/mwe-ui-core';

export const Context: AppContext = {
    appId: 'sleeping-dragon-ui',
    appName: '@molitio/mwe-sleeping-dragon-ui',
    appDisplayTitle: 'Molitio',
    nodeTree: {
        root: {
            resourceId: 'root',
            type: 'nav',
            navigation: {
                path: '/',
                label: 'Home',
            },
            nodeTree: {
                coverTitle: {
                    resourceId: 'coverTitle',
                    type: 'text',
                    textContent: {
                        molitioCover: {
                            en: { textContent: 'Molitio' },
                            hu: { textContent: 'Molitio' },
                        },
                    },
                },
            },
        },
    },
};
