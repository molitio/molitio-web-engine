/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: {
            dashing: {
                /* primary: "#6C9AC3" */
                primary: 'green',
                secondary: '#6C9AC3',
            },
        },
    },
    plugins: [require('daisyui')],
};
