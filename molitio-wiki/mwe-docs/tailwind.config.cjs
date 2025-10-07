/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './design-system/**/*.{md,mdx}',
        '../../packages-ui/ui-core/src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    presets: [require('@molitio/mwe-tailwindcss-config')],
};
