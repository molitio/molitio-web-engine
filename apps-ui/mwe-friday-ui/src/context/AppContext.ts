import type { AppContext } from '@molitio/mwe-ui-core';

export const Context: AppContext = {
    appId: 'friday-ui',
    appName: '@molitio/mwe-friday-ui',
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
                        title: {
                            textValue: 'cover.title',
                        },
                        greeting: {
                            textValue: 'cover.greeting',
                        },
                    },
                },
                missionStatement: {
                    resourceId: 'missionStatement',
                    type: 'text',
                    textContent: {
                        statement: {
                            textValue: 'cover.missionStatement',
                        },
                    },
                },
            },
        },
    },
};
