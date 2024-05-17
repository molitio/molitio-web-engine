/* eslint-env node */
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', '../../packages-ui/ui-core/src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {},
    },
    plugins: [require('daisyui')],
};
