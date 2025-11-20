import { AppContext } from './app-context';

export const DefaultApplicationContextRoot: AppContext = {
    appId: 'default-app-id',
    rootNode: {
        id: 'root',
        slug: '',
        title: 'Home',
        type: 'page',
        content: {
            _ref: 'home-page-ref',
            _type: 'landingPage',
            title: 'Welcome to the Default Application',
        },
        children: [
            {
                id: 'about',
                slug: 'about',
                title: 'About',
                type: 'page',
                content: {
                    _ref: 'about-page-ref',
                    _type: 'aboutPage',
                    title: 'About Us',
                },
                children: [],
            },
        ],
    },
};
