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
            '**/.yarn',
            '**/dist',
            '**/build',
            '**/.next',
            '**/.docusaurus',
            '**/.artifacts',
            '**/*.test.*',
            '**/node_modules',
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
            'react/react-in-jsx-scope': 'off',
            'prettier/prettier': 'error',
        },
        // Explicitly include the Next.js recommended config for detection
        // extends: [nextPlugin.configs.recommended], // Removed invalid 'extends' for flat config
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

    // CommonJS config files (.cjs)
    {
        files: ['**/*.cjs', '!pnp.cjs'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'script', // CommonJS
            globals: { ...globals.node, ...globals.es2022 },
        },
        plugins: { prettier: prettierPlugin },
        rules: {
            'prettier/prettier': 'error',
        },
    },

    // ESM config files (.mjs)
    {
        files: ['**/*.mjs', '!pnp.loader.mjs'],
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
        files: [
            '**/*.js',
            '!apps-ui/john-glenn-ui/**/*',
            '!apps-ui/sleeping-dragon-ui/**/*',
            '!apps-ui/mwe-friday-ui/**/*',
            '!packages-ui/mwe-ui-core/**/*',
            '!apps-api/resource-hub-api/**/*',
        ],
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
