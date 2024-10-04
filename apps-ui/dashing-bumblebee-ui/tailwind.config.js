/** @type {import('tailwindcss').Config} */

const config = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography')],
};

export default config;
