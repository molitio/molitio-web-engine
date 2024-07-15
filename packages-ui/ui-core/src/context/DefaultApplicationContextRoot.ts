import { AppContext } from '@molitio/ui-core';

export const DefaultApplicationContextRoot = {
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
