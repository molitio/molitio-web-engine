import React from 'react';
import { Metadata } from 'next';
import { Context } from '@/context/AppContext';
import { ClientRoot } from './ClientRoot';
import { NavBar } from '@molitio/mwe-ui-core';
import './globals.css';

export const metadata: Metadata = {
    title: Context.appDisplayTitle,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
    return (
        <html lang="en">
            <body className="bg-secondary min-h-screen">
                <NavBar headerText="Molito" />
                {children}
                <ClientRoot />
            </body>
        </html>
    );
}
