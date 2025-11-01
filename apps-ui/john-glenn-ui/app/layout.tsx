import React from 'react';
import './globals.css';
/* import { CookieConsent } from '@molitio/mwe-ui-core/'; */
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'John Glenn',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-secondary min-h-screen">
                {children}
                {/*      <CookieConsent /> */}
            </body>
        </html>
    );
}
