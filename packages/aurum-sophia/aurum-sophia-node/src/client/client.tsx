import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { AurumSophia } from 'components/AurumSophia';
import { AppContextProvider } from 'components/context/AppContextProvider';

ReactDOM.hydrate(
    <BrowserRouter>
        <AppContextProvider>
            <AurumSophia />
        </AppContextProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
