/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', '../../packages-ui/ui-core/src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            xxl: '1536px' /* if we use a " 2xl " , as the documentaion say --> got a beutiful error message */,
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
        },
    },
    daisyui: {
        themes: [
            {
                'dashing-bumblebee': {
                    /* primary: "#6C9AC3" */
                    primary: 'green',
                    secondary: '#6C9AC3',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
