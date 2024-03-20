import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AurumSophia } from 'components/AurumSophia';
import { AppContextProvider } from 'components/context/AppContextProvider';

export const startViewServer = () => {
    const server = express();

    server.set('view engine', 'ejs');
    console.log(__dirname);
    server.set('views', path.join(__dirname, 'views'));

    server.use('/', express.static(path.join(__dirname, 'public')));

    const manifest = fs.readFileSync(path.join(__dirname, 'public/manifest.json'), 'utf-8');

    const assets = JSON.parse(manifest);

    server.get('*', (req, res, next) => {
        const context = {};
        console.log(`requestOnUrl: ${req.url}`);
        const app = ReactDOMServer.renderToString(
            <StaticRouter location={req.url} context={context}>
                <AppContextProvider>
                    <AurumSophia />
                </AppContextProvider>
            </StaticRouter>,
        );
        res.render('client', { assets, app });
    });

    return server;
};
