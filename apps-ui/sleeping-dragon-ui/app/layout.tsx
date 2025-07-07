import React from 'react';
import './globals.css';

export const metadata = {
    title: 'Sleeping Dragon',
};

const RootLayout: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;
    return (
        <html lang="en">
            <body>
                <h1 className="text-blue-600">Sleeping Dragon</h1>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
