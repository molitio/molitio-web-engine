declare namespace TailwindConfig {
    interface Config {
        theme?: unknown;
        plugins?: unknown[];
    }
}

declare module '@molitio/mwe-tailwindcss-config' {
    const config: TailwindConfig.Config;
    export default config;
}
