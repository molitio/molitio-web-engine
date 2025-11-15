import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        tanstackRouter({
            target: 'react',
            autoCodeSplitting: true,
            /*           routesDirectory: './src/routes',
            generatedRouteTree: './src/routeTree.gen.ts',
            routeFileIgnorePrefix: '-',
            quoteStyle: 'single', */
        }),
        react(),
        tailwindcss(),
    ],
});
