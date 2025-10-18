/** @type {import('tailwindcss').Config} */

module.exports = {
    theme: {
        extend: {
            spacing: {
                'gutter-bottom': '2rem',
            },
            colors: {
                primary: '#03011edc',
                secondary: '#cfd3e6',
                tertiary: '#4D5BBC',
            },
            backgroundColor: {
                primary: '#97BB84',
                secondary: '#1f2937',
            },
            textColor: {
                placeholder: '#94a3b8',
                'form-field': '#03011edc',
            },
            boxShadowColor: {
                primary: '#97BB8427',
                secondary: '#1f29371A',
            },
            backgroundImage: {
                'gradient-to-172': 'linear-gradient(172deg, #03011edc 20%, #1f2937 80%)',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
