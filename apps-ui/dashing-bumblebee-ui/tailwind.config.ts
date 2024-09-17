/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', '../../packages-ui/mwe-ui-core/src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        screens: {
<<<<<<< HEAD
          sm: '640px',  // Small
          md: '768px',  // Medium
          lg: '1024px', // Large
          xl: '1536px',
          
=======
            sm: '640px', // Small
            md: '768px', // Medium
            lg: '1024px', // Large
            xl: '1280px', // Extra Large
>>>>>>> 56b81fdc9ac5347a2ce5eca92d95e960ff209bb7
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
            backgroundImage: {
                'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))',
            },
        },
    },
    daisyui: {
        themes: [
            {
                'dashing-bumblebee': {
                    /* primary: "#6C9AC3" 
                    primary: '#2085A1',*/
                    primary: '#1F2937',
                    accent: '#3f3f41',
                    neutral: '#2E2E2E',
                    secondary: '#EFEFEF',
                    background: '#FAFAFA',
                },
            },
        ],
    },
    plugins: [require('daisyui')],
};
