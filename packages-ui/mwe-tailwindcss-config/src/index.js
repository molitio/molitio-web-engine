/** @type {import('tailwindcss').Config} */

module.exports = {
    theme: {
        extend: {
            spacing: {
                'gutter-bottom': '2rem',
            },
            colors: {
                primary: '#72bcf9',
            },
            backgroundColor: {
                primary: '#1f2937',
            },
            textColor: {
                primary: '#72bcf9',
                placeholder: 'slate-400',
                'form-field': '#03011edc',
            },
            backgroundImage: {
                'gradient-to-172': 'linear-gradient(172deg, #03011edc 20%, #1f2937 80%)',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
