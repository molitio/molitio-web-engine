/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '640px', // Small
            md: '768px', // Medium
            lg: '1024px', // Large
            xl: '1280px',
            
        },
        extend: {
            backgroundImage: {
                'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))',
            },
        },
    },
    daisyui: {
        themes: {
            dashing: {
                /* primary: "#6C9AC3" */
                primary: 'green',
                secondary: '#1f2937',
            },
        },
    },
    plugins: [require('daisyui')],
};
