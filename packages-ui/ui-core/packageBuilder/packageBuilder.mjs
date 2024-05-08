// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {
    const fs = require('fs');
    console.log('Building package...');
    fs.copyFileSync(__dirname + '/LICENSE', __dirname + '/dist/LICENSE');
    fs.copyFileSync(__dirname + '/README.md', __dirname + '/dist/README.md');
    fs.copyFileSync(__dirname + '/.npmignore', __dirname + '/dist/.npmignore');
    fs.copyFileSync(__dirname + '/package.json', __dirname + '/dist/package.json');

    const source = fs.readFileSync(__dirname + '/dist/package.json').toString('utf-8');
    const sourceObj = JSON.parse(source);

    console.log(`name: ${sourceObj.name}, version: ${sourceObj.version}`);

    delete sourceObj['husky'];
    delete sourceObj['size-limit'];
    delete sourceObj['scripts'];
    delete sourceObj['devDependencies'];

    sourceObj.main = sourceObj.main.replace('src/index.ts', 'index.js');
    sourceObj.types = sourceObj.types.replace('dist/index.d.ts', 'index.d.ts');

    fs.writeFileSync(__dirname + '/dist/package.json', Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8'));
    fs.writeFileSync(__dirname + '/dist/version.txt', Buffer.from(sourceObj.version, 'utf-8'));
}

main();
