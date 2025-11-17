/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    verbose: true,
    coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }]],
    rootDir: './',
    projects: [
        {
            displayName: 'mwe-ui-core',
            preset: 'ts-jest',
            testEnvironment: 'jsdom',
            moduleFileExtensions: ['ts', 'js', 'tsx', 'scss'],
            coverageDirectory: '<rootDir>/coverage',
            moduleNameMapper: {
                '^.+\\.(css|less|scss)$': 'babel-jest',
            },
            collectCoverageFrom: [
                '<rootDir>/packages/**/*.ts',
                '<rootDir>/packages/**/*.tsx',
                '!<rootDir>/packages/**/src/**/index.ts',
            ],
            extensionsToTreatAsEsm: ['.ts', '.tsx'],
            transform: {
                '^.+\\.ts': 'ts-jest',
                '^.+\\.tsx': 'ts-jest',
            },
            testMatch: ['<rootDir>/**/*.test.{ts,tsx}'],
            testPathIgnorePatterns: ['<rootDir>/mode_modules', '<rootDir>/.yarn', 'mock', 'utils'],
        },
    ],
};
