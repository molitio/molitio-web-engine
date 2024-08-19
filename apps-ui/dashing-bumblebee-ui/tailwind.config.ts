/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', '../../packages-ui/mwe-ui-core/src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
            xs: '480px', // Extra Small
            sm: '640px', // Small
            md: '768px', // Medium
            lg: '1024px', // Large
            xl: '1280px', // Extra Large
            xxl: '1920px', // Extra Extra Large
        },
        extend: {
            zIndex: {
                '0': '0',
                '1': '1',
                '2': '2',
                '3': '3',
                '4': '4',
                '5': '5',
            },
            fontFamily: {
                'press-start': ['"Oswald"'],
            },
            backgroundImage: {
                'gradient-to-r': 'linear-gradient(to right, #628A1D, #2085A1)', // Példa gradient
            },
        },
    },
    daisyui: {
        themes: [
            {
                'dashing-bumblebee': {
                    /* primary: "#6C9AC3" */

                    neutral: '#2E2E2E',
                    primary: '#2085A1',
                    secondary: '#EFEFEF',
                    background: '#FAFAFA',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
