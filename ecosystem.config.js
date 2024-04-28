module.exports = [
    {
        name: 'resource-hub-api',
        cwd: 'usr/src/app',
        script: 'apps-api/resource-hub-api/dist/main.js',
        exec_mode: 'cluster',
        instances: 2,
    },
];
