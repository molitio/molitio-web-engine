import React from 'react';
import './globals.css';

export const metadata = {
    title: 'John Glenn',
};

const RootLayout: React.FC<React.PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <html lang="en">
            <body>
                <h1 className="text-blue-600">John Glenn</h1>
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
