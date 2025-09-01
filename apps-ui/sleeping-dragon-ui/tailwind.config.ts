import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
    presets: [require('@molitio/mwe-tailwindcss-config')],
};
export default config;
