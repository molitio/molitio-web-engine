import { AppContext } from './app-context';

export const DefaultApplicationContextRoot: AppContext = {
    appId: 'default-app-id',
    rootNode: {
        id: 'root',
        title: 'Home',
        type: 'root',
        content: {
            en: {
                _ref: 'home-page-ref',
                _type: 'landingPage',
                type: 'page',
                title: 'Welcome to the Default Application',
            },
            hu: {
                _ref: 'home-page-hu-ref',
                _type: 'landingPage',
                type: 'page',
                title: 'Üdvözöljük a Molitio alkalmazásban',
            },
        },
        children: [
            {
                id: 'about',
                slug: 'about',
                title: 'About',
                type: 'page',
                content: {
                    en: {
                        _ref: 'about-page-ref',
                        _type: 'aboutPage',
                        title: 'About Us',
                    },
                    hu: {
                        _ref: 'about-page-hu-ref',
                        _type: 'aboutPage',
                        title: 'Rólunk',
                    },
                },
                children: [],
            },
        ],
    },
};
