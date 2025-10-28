import React from 'react';
import { Metadata } from 'next';
import { MWERootLayout } from '@molitio/mwe-ui-core';
import { Context } from '@/context/AppContext';
import './globals.css';

export const metadata: Metadata = {
    title: Context.appDisplayTitle,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
    return <MWERootLayout appContext={{ ...Context }}>{children}hi1</MWERootLayout>;
}
