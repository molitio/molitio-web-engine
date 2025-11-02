/** @type {import('tailwindcss').Config} */

console.log('Loaded john-glenn-ui tailwind.config.cjs');
module.exports = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', '../../packages-ui/mwe-ui-core/src/**/*.{js,ts,jsx,tsx,mdx}'],
    presets: [require('@molitio/mwe-tailwindcss-config')],
};
