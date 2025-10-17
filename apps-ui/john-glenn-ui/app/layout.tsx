import React from 'react';
import { CookieConsent } from '@molitio/mwe-ui-core';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
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
