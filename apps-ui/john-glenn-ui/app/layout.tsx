import React from 'react';
import './globals.css';
import { CookieConsent } from '@molitio/mwe-ui-core';

export const metadata = {
    title: 'John Glenn',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <h1 className="text-blue-600">John Glenn</h1>
                {children}
                <CookieConsent />
            </body>
        </html>
    );
}
