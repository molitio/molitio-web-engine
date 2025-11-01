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
                            en: { textContent: 'Welcome to Molitio web engine default application.' },
                            hu: { textContent: 'Üdvözlünk a Molitio web engine alapértelmezett alkalmazásában.' },
                        },
                        description: {
                            en: { textContent: 'This is a demonstration of the text content node concept.' },
                            hu: { textContent: 'Ez a szövegtartalom node koncepciójának bemutatása.' },
                        },
                    },
                },
            },
        },
    },
};
