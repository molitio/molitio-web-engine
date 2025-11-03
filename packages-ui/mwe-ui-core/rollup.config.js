import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import json from '@rollup/plugin-json';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import size from 'rollup-plugin-size';
import { visualizer } from 'rollup-plugin-visualizer';
import fg from 'fast-glob';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import tailwindcss from '@tailwindcss/postcss';
import preserveDirectives from 'rollup-preserve-directives';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

const styleSystemConfig = require('./tailwind.config.cjs');

const packageJson = require('./package.json');

const moduleDefinitions = {
    'mwe-ui-core': {
        name: '@molitio/mwe-ui-core',
        basePath: './src',
        inputPath: 'index.ts',
        outDir: './dist',
        module: './dist/esm/index.js',
        bundle: {
            esm: './dist/bundle/esm/index.js',
            umd: './dist/bundle/umd/index.js',
        },
    },
    'mwe-ui-core/rsc': {
        name: '@molitio/mwe-ui-core/rsc',
        basePath: './src',
        inputPath: 'rsc.ts',
        outDir: './dist',
        module: './dist/esm/rsc.js',
        bundle: {
            esm: './dist/bundle/esm/rsc.js',
            umd: './dist/bundle/umd/rsc.js',
        },
    },
};

const extensions = ['.ts', '.tsx'];
const exclusions = ['**/dist', '**/.yarn', 'tsconfig.tsbuildinfo'];
const globals = {
    crypto: 'crypto',
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-is': 'react-is',
};

Object.keys(moduleDefinitions).map(
    (moduleName) =>
        console.log(`Rollup creating: ${moduleDefinitions[moduleName].name} v${packageJson.version}
`),
    /* Add for debugging: Tailwind config: ${JSON.stringify({ ...styleSystemConfig }, null, 2)} */
);

const modules = Array.from(
    Object.keys(moduleDefinitions).map((_module) => {
        const module = moduleDefinitions[_module];
        return {
            input: `${module.basePath}/${module.inputPath}`,
            treeshake: true,
            external: ['react', 'react-dom', 'react-is', 'next'],
            plugins: [
                {
                    name: 'watch-external',
                    async buildStart() {
                        const files = await fg(`${module.basePath}/**/*`);
                        for (let file of files) {
                            this.addWatchFile(file);
                        }
                    },
                },
                peerDepsExternal({
                    includeDependencies: false,
                }),
                ,
                preserveDirectives(),
                resolve(),
                commonjs(),
                {
                    dedupe: [
                        'react',
                        'react-dom',
                        'react-is',
                        'next',
                        'tailwind',
                        'postcss',
                        'device-detector-js',
                        'crypto',
                    ],
                },
                typescript({
                    tsconfig: `./tsconfig.json`,
                    declarationMap: false,
                    outputToFilesystem: true,
                }),
                babel({
                    babelHelpers: 'inline',
                    exclude: [...exclusions],
                    extensions: [...extensions],
                }),
                postcss({
                    config: {
                        path: './postcss.config.cjs',
                    },
                    extensions: ['.css'],
                    minimize: true,
                    inject: {
                        insertAt: 'top',
                    },
                    plugins: [tailwindcss(styleSystemConfig)],
                }),
                json(),
                terser(),
                size({ details: true }),
                visualizer({
                    filename: `../../.artifacts/bundle-map/${module.name}_bundle-map.html`,
                    open: false,
                }),
            ],
            output: [
                //unbundled cjs
                /*             {
                                name: `${module.basePath}/${module.name}`,
                                file: `${module.basePath}/${module.main}`,
                                format: 'cjs',
                                globals,
                            }, */
                //unbundled esm
                {
                    name: `${module.name}`,
                    dir: `${module.outDir}`,
                    assetFileNames: '[name]-[hash][extname]',
                    //   file: `${module.basePath}/${module.module}`,
                    format: 'esm',
                    sourcemap: false,
                    esModule: true,
                    globals,
                    strict: true,
                },
                //bundled esm
                /*        {
                        name: `${module.basePath}/${module.name}`,
                        file: `${module.basePath}/${module.bundle.esm}`,
                        format: 'esm',
                        exports: 'named',
                        globals,
                    }, */
                //bundled umd
                /*                 {
                                    name: `${module.basePath}/${module.name}`,
                                    dir: `${module.basePath}/${module.outDir}`,
                                    format: 'umd',
                                    exports: 'named',
                                    globals,
                                    preserveModules: true,
                                },
                            ], 
                        };
                    }*/
            ],
        };
    }),
);

export default [...modules];

/* IIFE for future implementation
  /*   {
        input: 'packages/mwe-ui-core/src/ui-page/radio-page/components/RadioPage.tsx',
        plugins: [
            peerDepsExternal(),
            typescript({
                tsconfig: 'packages/mwe-ui-core/tsconfig.base.json',
                compilerOptions: {
                    module: 'esnext',
                },
                //  traceResolution: true,
            }),
            json(),
            commonjs(),
            babel({
                include: ['packages/mwe-ui-core/src'],
                babelHelpers: 'bundled',
                exclude: [...exclusions],
                extensions: [...extensions],
            }),
            nodeResolve(),
            // buble({ transforms: { forOf: false } }),
            image(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
                __buildDate__: () => JSON.stringify(new Date()),
                __buildVersion: packageJson.version,
                preventAssignment: true,
            }),
            size(),
        ],
        output: [
            //bundled iife
            {
                name: packageJson.rollupPaths.uiCore.iife.radioPage,
                file: packageJson.rollupPaths.uiCore.iife.radioPage,
                format: 'iife',
                globals,
            },
        ],
    }, */
