import React, { Suspense } from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { NavBar, NavRootProvider, AppContext } from '@molitio/ui-core';
import { ApplicationContextRoot } from '../context';
import Loading from './loading';

//TODO: when coming from conig DB it will be depricated
const MOCK_APPLICATION_CONTEXT = async () => {
    return new Promise<AppContext>((resolve) => {
        //setTimeout(() => {
        resolve(ApplicationContextRoot);
        //}, 3000);
    });
};

async function getAppContext() {
    'use server';
    return await MOCK_APPLICATION_CONTEXT();
}

export const metadata: Metadata = {
    title: 'Dashing Bumblebee', //MOCK_APPLICATION_CONTEXT?.contentRoot?['common'].['leafs'].['app'].textContent?['appTitle'],
    description: '', //MOCK_APPLICATION_CONTEXT?.contentRoot['common']?.leafs['app']?.textContent['appDescription'],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const context: AppContext = ApplicationContextRoot;

    return (
        <html data-theme="dashing-bumblebee">
            <body>
                <section>
                    <Suspense fallback={<Loading />}>
                        <NavRootProvider navRoot={context.navRoot}>
                            <NavBar
                                headerText={context.appName}
                                logo={
                                    <Image
                                        src={context.appLogoUrl ?? ''}
                                        alt={context.appLogoAlt ?? ''}
                                        width={300}
                                        height={100}
                                    />
                                }
                            />
                        </NavRootProvider>
                    </Suspense>
                </section>
                <main className="py-16 my-4">{children}</main>
            </body>
        </html>
    );
}
