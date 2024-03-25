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
import packageJson from './package.json' assert { type: 'json' };
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';

const { moduleDefinitions } = packageJson;

const isProd = process.env.NODE_ENV === 'production';
const extensions = ['.ts', '.tsx'];
const exclusions = ['**/dist', '**/.yarn', 'tsconfig.tsbuildinfo'];
const globals = {
    crypto: 'crypto',
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-is': 'react-is',
};

export const tailwindcssConfig = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};

Object.keys(moduleDefinitions).map((moduleName) =>
    console.log(`moduleName: ${moduleDefinitions[moduleName].name} v${packageJson.version}`),
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
                        const files = await fg(`${module.basePath}/${module.baseUrl}/**/*`);
                        for (let file of files) {
                            this.addWatchFile(file);
                        }
                    },
                },
                peerDepsExternal({
                    includeDependencies: false,
                }),
                postcss({
                    modules: true,
                    minimize: true,
                    writeDefinitions: true,
                    extensions: ['.css', '.scss'],
                    inject: {
                        insertAt: 'top',
                    },
                    plugins: [autoprefixer()],
                }),
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
                        'autoprefixer',
                        'device-detector-js',
                        'crypto',
                    ],
                },

                typescript({
                    tsconfig: `${module.basePath}/tsconfig.json`,
                    outDir: `${module.basePath}/dist`,
                    outputToFilesystem: true,
                }),
                babel({
                    babelHelpers: 'inline',
                    exclude: [...exclusions],
                    extensions: [...extensions],
                }),
                json(),
                terser(),
                size({ details: true }),
                visualizer({
                    filename: `./artifacts/bundle-map/${module.name}_bundle-map.html`,
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
                    name: `${module.basePath}/${module.name}`,
                    dir: `${module.outDir}`,
                    //   file: `${module.basePath}/${module.module}`,
                    format: 'esm',
                    sourcemap: true,
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
        input: 'packages/ui-core/src/ui-page/radio-page/components/RadioPage.tsx',
        plugins: [
            peerDepsExternal(),
            typescript({
                tsconfig: 'packages/ui-core/tsconfig.base.json',
                compilerOptions: {
                    module: 'esnext',
                },
                //  traceResolution: true,
            }),
            json(),
            commonjs(),
            babel({
                include: ['packages/ui-core/src'],
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
