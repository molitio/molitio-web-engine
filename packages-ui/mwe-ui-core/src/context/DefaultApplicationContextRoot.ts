import { AppContext } from './app-context';

export const DefaultApplicationContextRoot: AppContext = {
    appName: 'Default App',
    appId: 'default-app-id',
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
                },
                welcome: {
                    resourceId: 'welcome',
                    type: 'text',
                    textContent: {
                        main: {
                            textValue: 'Welcome to the Default Application!',
                        },
                        description: {
                            textValue: 'This is a demonstration of the text content node concept.',
                        },
                    },
                },
            },
        },
    },
};
