import fs from 'fs';
import { cwd } from 'process';

const build = () => {
    try {
        const distributionDirectory = 'dist';
        console.log('Creating optimized package info...');
        console.log(`Current directory: ${cwd()}`);
        console.log(`Distribution directory: ${distributionDirectory}`);

        if (!isDirectoryExists(distributionDirectory)) {
            fs.mkdirSync(distributionDirectory);
        }

        fsCopyFile('LICENSE', 'dist/LICENSE');
        fsCopyFile('README.md', 'dist/README.md');
        fsCopyFile('.npmignore', 'dist/.npmignore');
        fsCopyFile('package.json', 'dist/package.json');

        const source = fs.readFileSync('dist/package.json')?.toString('utf-8');
        const sourceObj = JSON.parse(source);

        console.log(`name: ${sourceObj.name}, version: ${sourceObj.version}`);

        delete sourceObj['husky'];
        delete sourceObj['size-limit'];
        delete sourceObj['scripts'];
        delete sourceObj['devDependencies'];

        // Transform main/types as before
        sourceObj.main = sourceObj.main.replace('src/index.ts', 'index.js');
        sourceObj.types = 'index.d.ts';

        // Transform exports and typesVersions for dist
        if (sourceObj.exports) {
            sourceObj.exports = {
                '.': {
                    import: './esm/index.js',
                    require: './esm/index.js',
                    types: './esm/index.d.ts',
                },
                './rsc': {
                    import: './esm/rsc.js',
                    require: './esm/rsc.js',
                    types: './rsc.d.ts',
                },
            };
        }
        if (sourceObj.typesVersions) {
            sourceObj.typesVersions = {
                '*': {
                    rsc: ['rsc.d.ts'],
                    '*': ['esm/index.d.ts'],
                },
            };
        }

        fs.writeFile('dist/package.json', Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8'));
        fs.writeFile('dist/version.txt', Buffer.from(sourceObj.version, 'utf-8'));
    } catch (error) {
        console.error('Error occurred while building package:', error);
    }
};

const isDirectoryExists = (path) => {
    try {
        if (fs.existsSync(path)) {
            return true;
        }
    } catch (error) {
        console.error('Directory not found', error);
        return false;
    }
};

const fsCopyFile = (source, destination) => {
    try {
        fs.copyFileSync(source, destination);
    } catch (error) {
        console.error('Error occurred while copying file:', error);
    }
};

build();
