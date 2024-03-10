export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        expanded: false,
        matchers: {
            //color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    layout: 'fullscreen',
    backgrounds: {
        values: [{ name: 'Transparent', value: 'rgba(0, 0, 0, 0.0)' }],
    },
};
