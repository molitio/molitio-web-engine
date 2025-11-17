import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MWEClientApp, MWEClientRootLayout } from '@molitio/mwe-ui-core';
import { Context } from './context';
import './globals.css';
import './i18n';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MWEClientRootLayout appContext={{ ...Context }}>
            <MWEClientApp />
        </MWEClientRootLayout>
    </StrictMode>,
);
