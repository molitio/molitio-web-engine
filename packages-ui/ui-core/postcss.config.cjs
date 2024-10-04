/* eslint-env node */
module.exports = {
    plugins: {
        'postcss-import': {},
        tailwindcss: { config: './tailwind.config.cjs' },
        autoprefixer: {},
    },
};
