declare namespace TailwindConfig {
    interface Config {
        theme?: any;
        plugins?: any[];
    }
}

declare module '@molitio/mwe-tailwindcss-config' {
    const config: TailwindConfig.Config;
    export default config;
}
