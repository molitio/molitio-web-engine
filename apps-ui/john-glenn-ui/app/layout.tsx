import React from 'react';
import { Metadata } from 'next';
import ClientRoot from './ClientRoot';
import './globals.css';

export const metadata: Metadata = {
    title: 'John Glenn',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="bg-secondary min-h-screen">
                {children}
                {<ClientRoot />}
            </body>
        </html>
    );
}
