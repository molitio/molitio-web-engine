/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', '../../packages-ui/ui-core/src/**/*.{js,ts,jsx,tsx,mdx}'],
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
