import { defineConfig } from '@tanstack/router-cli';

export default defineConfig({
    // Directory containing your route files (relative to this config file)
    routesDirectory: './src/ui-app/routes',

    // Output file for the generated route tree
    generatedRouteTree: './src/ui-app/generatedRoutes.tsx',

    // Optional: Enable/disable logging during generation
    disableLogging: false,

    // Optional: Code style preferences
    quoteStyle: 'single', // 'single' or 'double'

    // Optional: Semicolons in generated code
    semicolons: true,

    // Optional: Disable auto-splitting for routes (for SSR or specific builds)
    autoCodeSplitting: true,

    // Optional: Custom route file extensions (default: ['.tsx', '.ts'])
    routeFileExtensions: ['.tsx', '.ts'],

    // Optional: Ignore specific patterns in route files
    routeFileIgnorePattern: '-',

    // Optional: Target framework (affects generated code)
    target: 'react',
});
