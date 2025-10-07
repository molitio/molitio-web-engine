import React from 'react';
import './globals.css';
import { MWERootLayout } from '@molitio/mwe-ui-core';
import { Context } from '@/context/AppContext';

export const metadata = {
    title: Context.appDisplayTitle,
};

export default function RootLayout({ children }: React.PropsWithChildren) {
    return <MWERootLayout appContext={{ ...Context }}>{children}hi1</MWERootLayout>;
}
