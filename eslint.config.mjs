import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import prettierPlugin from 'eslint-plugin-prettier';
import nextPlugin from '@next/eslint-plugin-next';
import jsonPlugin from 'eslint-plugin-jsonc';
import globals from 'globals';

export default [
    // Global ignores
    {
        ignores: [
            '**/.pnp.cjs',
            '**/.pnp.loader.mjs',
            '**/mwe-ui-core-tests',
            '**/.yarn',
            '**/node_modules',
            '**/dist',
            '**/build',
            '**/.next',
            '**/.docusaurus',
            '**/.artifacts',
            '**/*.test.*',
            '**/*.spec.*',
        ],
    },

    // Next.js apps (john-glenn-ui, sleeping-dragon-ui)
    {
        files: ['apps-ui/john-glenn-ui/**/*.{js,jsx,ts,tsx}', 'apps-ui/sleeping-dragon-ui/**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.es2022 },
        },
        settings: { react: { version: 'detect', runtime: 'automatic' } },
        plugins: {
            react: reactPlugin,
            prettier: prettierPlugin,
            'react-hooks': reactHooksPlugin,
            '@typescript-eslint': tsPlugin,
            '@next/next': nextPlugin,
        },
        rules: {
            ...(reactPlugin.configs?.recommended?.rules || {}),
            ...(reactHooksPlugin.configs?.recommended?.rules || reactHooksPlugin.rules || {}),
            ...(tsPlugin.configs?.recommended?.rules || {}),
            ...(nextPlugin.configs?.recommended?.rules || {}),
            '@next/next/no-html-link-for-pages': 'off',
            'react/react-in-jsx-scope': 'off',
            'prettier/prettier': 'error',
        },
    },

    // Vite React app (mwe-friday-ui)
    {
        files: ['apps-ui/mwe-friday-ui/**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.es2022 },
        },
        settings: { react: { version: 'detect', runtime: 'automatic' } },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            '@typescript-eslint': tsPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            ...(reactPlugin.configs?.recommended?.rules || {}),
            ...(reactHooksPlugin.configs?.recommended?.rules || reactHooksPlugin.rules || {}),
            ...(tsPlugin.configs?.recommended?.rules || {}),
            'react/react-in-jsx-scope': 'off',
            'prettier/prettier': 'error',
        },
    },

    // Component library (mwe-ui-core)
    {
        files: ['packages-ui/mwe-ui-core/**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.es2022 },
        },
        // use the automatic JSX runtime so React doesn't need to be in scope
        settings: { react: { version: 'detect', runtime: 'automatic' } },
        plugins: {
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            '@typescript-eslint': tsPlugin,
            prettier: prettierPlugin,
        },
        rules: {
            ...(reactPlugin.configs?.recommended?.rules || {}),
            ...(reactHooksPlugin.configs?.recommended?.rules || reactHooksPlugin.rules || {}),
            ...(tsPlugin.configs?.recommended?.rules || {}),
            // New JSX transform doesn't require React in scope
            'react/react-in-jsx-scope': 'off',
            'prettier/prettier': 'error',
        },
    },

    // NestJS API (resource-hub-api)
    {
        files: ['apps-api/resource-hub-api/**/*.ts'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: { ...globals.node, ...globals.es2022 },
        },
        plugins: { '@typescript-eslint': tsPlugin, prettier: prettierPlugin },
        rules: {
            ...(tsPlugin.configs?.recommended?.rules || {}),
            'prettier/prettier': 'error',
        },
    },

    // Root-level TypeScript config files
    {
        files: ['*.ts', '**/*.d.ts', 'codegen.ts'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: { ...globals.node, ...globals.es2022 },
        },
        plugins: { '@typescript-eslint': tsPlugin, prettier: prettierPlugin },
        rules: {
            ...(tsPlugin.configs?.recommended?.rules || {}),
            'prettier/prettier': 'error',
        },
    },

    // CommonJS config files (.cjs)
    {
        ignores: ['**/.pnp.cjs'],
        files: ['**/*.cjs'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'script',
            globals: { ...globals.node, ...globals.es2022 },
        },
        plugins: { prettier: prettierPlugin },
        rules: {
            'prettier/prettier': 'error',
        },
    },

    // ESM config files (.mjs)
    {
        ignores: ['**/.pnp.loader.mjs'],
        files: ['**/*.mjs'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module', // ESM
            globals: { ...globals.node, ...globals.es2022 },
        },
        plugins: { prettier: prettierPlugin },
        rules: {
            'prettier/prettier': 'error',
        },
    },

    // Fallback for plain JS files (exclude all project folders handled above)
    {
        ignores: [
            '**/apps-ui/john-glenn-ui/**',
            '**/apps-ui/sleeping-dragon-ui/**',
            '**/apps-ui/mwe-friday-ui/**',
            '**/packages-ui/mwe-ui-core/**',
            '**/apps-api/resource-hub-api/**',
        ],
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: { ...globals.es2022 },
        },
        plugins: { '@typescript-eslint': tsPlugin, prettier: prettierPlugin },
        rules: {
            ...(js.configs?.recommended?.rules || {}),
        },
    },

    // JSON files
    {
        files: ['**/*.json'],
        languageOptions: { parser: jsonPlugin },
        plugins: { jsonc: jsonPlugin },
        rules: { 'jsonc/no-comments': 'error' },
    },
];
