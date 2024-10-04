/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [require('@molitio/mwe-tailwindcss-config')],
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', '../../packages-ui/ui-core/src/**/*.{js,ts,jsx,tsx,mdx}'],
};
