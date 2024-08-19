import { AppContext } from './app-context';

export const DefaultApplicationContextRoot: AppContext = {
    appName: 'MWE',
    navRoot: {
        home: {
            label: 'Cover',
            iconUrl: 'settings.svg',
            path: '/',
        },
        message: {
            label: 'Business',
            iconUrl: 'request.svg',
            path: '/services',
        },
        about: {
            label: 'About',
            iconUrl: 'lamp.svg',
            path: '/about',
        },
        contact: {
            label: 'Contact',
            iconUrl: 'document.svg',
            path: '/contact',
        },
    },
};
