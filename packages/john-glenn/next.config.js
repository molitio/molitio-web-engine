/** @type {import('next').NextConfig} */
//const withTM = require('next-transpile-modules')(['@molitio/ui-core']);
//const path = require('path');

const nextConfig = {
    /*  reactStrictMode: true,
    swcMinify: true,
   sassOptions: {
        includePaths: [path.join(__dirname, 'globalStyles')],
            prependData: `@import "./app/globalStyles/Variables.scss";`,
        prependData: `@import "./app/globalStyles/globals.scss";`, 
    },*/
};
/* const nextConfig = withTM({
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'globalStyles')],
//         prependData: `@import "./app/globalStyles/Variables.scss";`,
//        prependData: `@import "./app/globalStyles/globals.scss";`, 
    },
}); */

module.exports = nextConfig;
