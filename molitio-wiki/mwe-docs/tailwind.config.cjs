/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './design-system/**/*.{md,mdx}'],
    presets: [require('@molitio/mwe-tailwindcss-config')],
};
