export default [
    {
        files: ['packages/john-glenn/**/*.ts', 'packages/john-glenn/**/*.tsx'],
        extends: 'next/core-web-vitals',
        ignorePatterns: ['.artifacts', '.next', 'dist', 'node_modules'],
    },
    {
        files: ['packages/ui-core/**/*.ts', 'packages/ui-core/**/*.tsx'],
        env: {
            module: 'Node16',
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
        //tsconfigRootDir: 'src',
        parser: '@typescript-eslint/parser',
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 2020,
            project: 'packages/ui-core/tsconfig.json',
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
