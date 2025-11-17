import React from 'react';
import { Metadata } from 'next';
import { Context } from '@/context/AppContext';
import { NavBar } from '@molitio/mwe-ui-core/rsc';
import ClientRoot from './ClientRoot';
import './globals.css';

export const metadata: Metadata = {
    title: Context.appDisplayTitle,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
    return (
        <html lang="en">
            <body className="bg-secondary min-h-screen">
                <NavBar headerText="Molito" navMenu={<div>Menu</div>} />
                {children}
                <ClientRoot />
            </body>
        </html>
    );
}
