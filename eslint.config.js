/*
 * Monorepo wide eslint config, UI Apps in folder apps-ui have individual
 * eslint configs for clean isolated nextjs app builds
 */

module.exports = [
    // Baseline Next.js config for john-glenn-ui and sleeping-dragon-ui only
    {
        files: [
            'apps-ui/john-glenn-ui/app/**/*.ts',
            'apps-ui/john-glenn-ui/app/**/*.tsx',
            'apps-ui/john-glenn-ui/pages/**/*.ts',
            'apps-ui/john-glenn-ui/pages/**/*.tsx',
            'apps-ui/sleeping-dragon-ui/app/**/*.ts',
            'apps-ui/sleeping-dragon-ui/app/**/*.tsx',
            'apps-ui/sleeping-dragon-ui/pages/**/*.ts',
            'apps-ui/sleeping-dragon-ui/pages/**/*.tsx',
        ],
        extends: [
            'next/core-web-vitals',
            'plugin:react/recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:prettier/recommended',
        ],
        parser: '@typescript-eslint/parser',
        plugins: ['@typescript-eslint', 'react'],
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 2020,
            sourceType: 'module',
        },
        env: {
            browser: true,
            es2022: true,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            // Add any Next.js/React/TS rules here if needed
        },
    },
    {
        files: ['**/*.js'],
        parser: '@babel/eslint-parser',
        parserOptions: {
            sourceType: 'module',
        },
    },
    {
        files: ['apps-api/resource-hub-api/**/*.ts'],
        parser: '@typescript-eslint/parser',
        ignorePatterns: ['resource-hub-api/documentation/**/*'],
        parserOptions: {
            project: 'tsconfig.json',
            tsconfigRootDir: __dirname,
            sourceType: 'module',
        },
        plugins: ['@typescript-eslint/eslint-plugin'],
        extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
        root: true,
        env: {
            node: true,
            jest: true,
        },
        rules: {
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
        },
    },
    {
        files: ['packages-ui/mwe-ui-core/**/*.ts, packages-ui/mwe-ui-core/**/*.tsx}'],
        env: {
            module: 'ESNext',
            browser: true,
            es2022: true,
        },
        rules: {
            '@typescript-eslint/await-thenable': 'error',
            'prettier/prettier': 'error',
            'prefer-destructuring': [
                'error',
                {
                    array: true,
                    object: true,
                },
                {
                    enforceForRenamedProperties: false,
                },
            ],
        },
        plugins: ['eslint-plugin-tsdoc'],
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 2020,
            project: 'packages/mwe-ui-core/tsconfig.json',
            sourceType: 'module',
            createDefaultProgram: true,
        },
        extends: [
            'eslint:recommended',
            /* 'next/core-web-vitals', */
            'plugin:react/jsx-runtime',
            'plugin:react/recommended',
            'plugin:@typescript-eslint/recommended',
            'plugin:@typescript-eslint/eslint-recommended',
            'plugin:@typescript-eslint/recommended-requiring-type-checking',
            'prettier', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
            //  'plugin:prettier/recommended', Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
            'plugin:react-hooks/recommended',
        ],
        settings: {
            react: {
                createClass: 'createReactClass',
                // Regex for Component Factory to use,
                // default to "createReactClass"
                pragma: 'React',
                // Pragma to use, default to "React"
                fragment: 'Fragment',
                // Fragment to use (may be a property of <pragma>), default to "Fragment"
                version: 'detect',
                // React version. "detect" automatically picks the version you have installed.
                // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                // default to latest and warns if missing
                // It will default to "detect" in the future
                // flowVersion: '0.53', // Flow version
            },
            propWrapperFunctions: [
                // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
                'forbidExtraProps',
                {
                    property: 'freeze',
                    object: 'Object',
                },
                {
                    property: 'myFavoriteWrapper',
                },
            ],
            linkComponents: [
                // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
                'Hyperlink',
                {
                    name: 'Link',
                    linkAttribute: 'to',
                },
            ],
        },
    },
];
