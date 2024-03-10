const config = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    staticDirs: ['../public'],
    addons: [
        /*     "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-interactions",
    "@storybook/addon-outline",
    "storybook-addon-designs", */
    ],
    babel: async (options) => ({
        ...options,
        plugins: [
            [
                'babel-plugin-styled-components',
                {
                    displayName: false,
                    fileName: true,
                },
            ],
        ],
    }),
    typescript: {
        check: false,
        checkOptions: {},
        /*         reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
        }, */
    },
    framework: '@storybook/react',
    core: {
        builder: 'webpack5',
    },
    features: {
        postcss: false,
    },
    refs: {
        'creatio-design-system': {
            title: 'Creatio Design System',
            url: 'molitio.com/creatio',
        },
    },
};

module.exports = config;
