// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.
import fs from 'fs';
import { cwd } from 'process';

const main = () => {
    console.log('Building package...');

    fs.copyFileSync('/LICENSE', '/dist/LICENSE');
    fs.copyFileSync('/README.md', '/dist/README.md');
    fs.copyFileSync('/.npmignore', '/dist/.npmignore');
    fs.copyFileSync('/package.json', '/dist/package.json');

    const source = fs.readFileSync('/dist/package.json').toString('utf-8');
    const sourceObj = JSON.parse(source);

    console.log(`name: ${sourceObj.name}, version: ${sourceObj.version}`);

    delete sourceObj['husky'];
    delete sourceObj['size-limit'];
    delete sourceObj['scripts'];
    delete sourceObj['devDependencies'];

    sourceObj.main = sourceObj.main.replace('src/index.ts', 'index.js');
    sourceObj.types = sourceObj.types.replace('dist/index.d.ts', 'index.d.ts');

    fs.writeFileSync('/dist/package.json', Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8'));
    fs.writeFileSync('/dist/version.txt', Buffer.from(sourceObj.version, 'utf-8'));
};

main();
