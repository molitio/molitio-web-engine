import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
    theme: {
        screens: {},
        extend: {
            backgroundImage: {
                'gradient-to-172': 'linear-gradient(172deg, #03011edc 20%, #1f2937 80%)',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
