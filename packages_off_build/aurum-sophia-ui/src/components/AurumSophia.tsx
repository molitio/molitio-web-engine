import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { AppContextProvider } from './context/AppContextProvider';

export const AurumSophia: React.FC = () => {
    return (
        <React.StrictMode>
            <AppContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AppContextProvider>
        </React.StrictMode>
    );
};
