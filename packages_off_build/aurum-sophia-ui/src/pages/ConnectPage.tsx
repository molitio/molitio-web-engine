import React from 'react';
import { AppContext } from '../services/siteDefaultsService';

export const ConnectPage: React.FC = () => {
    const context = React.useContext(AppContext);
    return (
        <>
            <section>{context.molitioId} connect page</section>
        </>
    );
};
