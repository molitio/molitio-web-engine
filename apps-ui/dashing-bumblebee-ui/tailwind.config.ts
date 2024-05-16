import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', '../../packages-ui/ui-core/src/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {},
    },
    plugins: [],
};
export default config;
