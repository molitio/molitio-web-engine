import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { NavBar, NavRootProvider, AppContext, ContentRootProvider, MWERootLayout } from '@molitio/mwe-ui-core';
import { ApplicationContextRoot } from '../context';
/* import './styles/globals.css'; */

//TODO: when coming from conig DB it will be depricated
const MOCK_APPLICATION_CONTEXT = async () => {
    return new Promise<AppContext>((resolve) => {
        //setTimeout(() => {
        resolve(ApplicationContextRoot);
        //}, 3000);
    });
};

async function getAppContext() {
    'use client';
    return await MOCK_APPLICATION_CONTEXT();
}

export const metadata: Metadata = {
    title: 'Dashing Bumblebee', //MOCK_APPLICATION_CONTEXT?.contentRoot?['common'].['leafs'].['app'].textContent?['appTitle'],
    description: '', //MOCK_APPLICATION_CONTEXT?.contentRoot['common']?.leafs['app']?.textContent['appDescription'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const context: AppContext = ApplicationContextRoot;

    return <MWERootLayout appContext={context} children={children} />;
}
