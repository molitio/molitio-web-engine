import { Config } from 'tailwindcss';
import mweTailwindConfig from '@molitio/mwe-tailwindcss-config';

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', '../../packages-ui/ui-core/src/**/*.{js,ts,jsx,tsx,mdx}'],
    presets: [mweTailwindConfig],
};

export default config;
