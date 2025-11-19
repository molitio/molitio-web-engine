import { AppContext } from './app-context';

export const DefaultApplicationContextRoot: AppContext = {
    appId: 'default-app-id',
    appName: 'Default App',
    appVersion: '0.2.0',
    appDisplayTitle: 'Default Application',
    nodeTree: {
        root: {
            resourceId: 'some-application-root',
            type: 'app',
            textContent: {
                appTitle: {
                    textValue: 'Welcome to the Default Application',
                },
            },
            nodeTree: {
                home: {
                    resourceId: 'locale-home',
                    type: 'document',
                    navigation: {
                        path: '/$locale',
                        label: 'Home',
                    },
                    textContent: {
                        welcome: {
                            textValue: 'This is the home page of the Default Application.',
                        },
                    },
                    nodeTree: {
                        about: {
                            resourceId: 'about',
                            type: 'nav',
                            navigation: {
                                path: '/about',
                                label: 'About',
                            },
                            nodeTree: {
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
                },
            },
        },
    },
};
