module.exports = [
    {
        files: ['**/*.js'],
        parser: '@babel/eslint-parser',
        parserOptions: {
            sourceType: 'module',
        },
    },
    {
        files: ['apps-ui/john-glenn-ui/**/*.ts', 'apps-ui/john-glenn-ui/**/*.tsx}'],
        extends: 'next/core-web-vitals',
        ignorePatterns: ['.next', 'dist'],
    },
    {
        files: ['apps-ui/dashing-bumblebee-ui/**/*.ts', 'apps-ui/dashing-bumblebee-ui/**/*.tsx}'],
        extends: 'next/core-web-vitals',
        ignorePatterns: ['.next', 'dist'],
    },
    {
        files: ['apps-ui/gallery-display-ui/**/*.ts', 'apps-ui/gallery-display-ui/**/*.tsx}'],
        env: { browser: true, es2020: true },
        extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
        ignorePatterns: ['dist', '.eslintrc.cjs'],
        parser: '@typescript-eslint/parser',
        plugins: ['react-refresh'],
        rules: {
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
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
