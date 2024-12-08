import { createRoot } from 'react-dom/client';
import App from './App';
import { StrictMode } from 'react';

const appContainer = document.querySelector('#root');

if (appContainer) {
    const appRoot = createRoot(appContainer);

    appRoot.render(
        <StrictMode>
            <App />
        </StrictMode>,
    );
}
