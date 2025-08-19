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
                            contentTitle: 'Welcome to Molitio web engine default application.',
                            textContent: {
                                description: 'This is a demonstration of the text content node concept.',
                            },
                        },
                    },
                },
            },
        },
    },
};
