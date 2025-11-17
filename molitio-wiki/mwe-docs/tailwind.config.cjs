/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './src/design-system/**/*.{md,mdx}',
        '../../packages-ui/mwe-ui-core/src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    presets: [require('@molitio/mwe-tailwindcss-config')],
};
