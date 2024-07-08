import React, { Suspense } from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { NavBar, Footer, NavRootProvider, AppContext } from '@molitio/ui-core';
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
    const context: AppContext = await getAppContext();

    console.log('context at DB Root', context);
    
    return (
        <html data-theme="dashing-bumblebee">
            <body>
                <section>
                    <Suspense fallback={<Loading />}>
                        <NavRootProvider navRoot={context['navRoot']}>
                            <NavBar
                                headerText={context['appName']}
                                logo={
                                    <Image
                                        src={
                                            '/logo_v1.svg' /* ApplicationContextRoot.contentRoot['common'].leafs['app'].assetUrls['logoSvg'] */
                                        }
                                        alt={'logo'}
                                        width={300}
                                        height={100}
                                    />
                                }
                            />
                        </NavRootProvider>
                    </Suspense>
                </section>
                <main>{children}</main>
                
                <Footer />
                
            </body>
        </html>
    );
}
