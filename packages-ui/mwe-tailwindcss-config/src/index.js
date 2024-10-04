/** @type {import('tailwindcss').Config} */

module.exports = {
    theme: {
        extend: {
            spacing: {
                'gutter-bottom': '5rem',
            },
            backgroundImage: {
                'gradient-to-172': 'linear-gradient(172deg, #03011edc 20%, #1f2937 80%)',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
