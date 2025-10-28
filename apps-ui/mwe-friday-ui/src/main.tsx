import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MWEApp, MWERootLayout } from '@molitio/mwe-ui-core';
import { Context } from './context';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MWERootLayout appContext={{ ...Context }}>
            <MWEApp />
        </MWERootLayout>
    </StrictMode>,
);
