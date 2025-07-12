import { AppContext } from './app-context';

export const DefaultApplicationContextRoot: AppContext = {
    appName: 'Default App',
    navRoot: {
        home: {
            label: 'Home',
            path: '/',
        },
        about: {
            label: 'About',
            path: '/about',
        },
    },
    contentRoot: {
        section1: {
            branchContent: {
                contentTitle: 'Page Section 1',
                textContent: {
                    subtitle: 'Branch Context 1',
                    description: 'This is a default description for Section 1. Replace with your content.',
                },
            },
            leafs: {
                leaf1: {
                    contentTitle: 'Leaf 1',
                    textContent: {
                        description: 'This is a default description for Leaf 1.',
                    },
                },
                leaf2: {
                    contentTitle: 'Leaf 2',
                    textContent: {
                        description: 'This is a default description for Leaf 2.',
                    },
                },
            },
        },
        section2: {
            branchContent: {
                contentTitle: 'Page Section 2',
                textContent: {
                    subtitle: 'Branch Context 2',
                    description: 'This is a default description for Section 2. Replace with your content.',
                },
            },
            leafs: {
                leaf3: {
                    contentTitle: 'Leaf 3',
                    textContent: {
                        description: 'This is a default description for Leaf 3.',
                    },
                },
            },
        },
    },
};
