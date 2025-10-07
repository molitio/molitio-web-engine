import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppShell } from '@molitio/mwe-ui-core';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AppShell>
            <App />
        </AppShell>
    </StrictMode>,
);
