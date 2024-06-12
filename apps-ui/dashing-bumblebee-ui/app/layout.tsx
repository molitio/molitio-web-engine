import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { NavBar, Footer, NavRootProvider } from '@molitio/ui-core';
import { ApplicationContextRoot } from '../context';
import './styles/globals.css';

//TODO: when coming from conig DB it will be depricated
const MOCK_APPLICATION_CONTEXT = {
    ...ApplicationContextRoot,
};

export const metadata: Metadata = {
    title: 'Dashing Bumblebee', //MOCK_APPLICATION_CONTEXT?.contentRoot?['common'].['leafs'].['app'].textContent?['appTitle'],
    description: '', //MOCK_APPLICATION_CONTEXT?.contentRoot['common']?.leafs['app']?.textContent['appDescription'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const appContext = {
        ...MOCK_APPLICATION_CONTEXT,
    };


    
    return (
        <html data-theme="dashing-bumblebee">
            <body>
                <section>
                    <NavRootProvider>
                        <NavBar
                            appNavRoot={appContext['navRoot']}
                            headerText={appContext['appName']}
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
                </section>
                <main>{children}</main>
                <Footer
                    licenceText={
                        'footer default text' /* ApplicationContextRoot.contentRoot['common'].leafs['footer'].textContent['maintainer'] */
                    }
                />
            </body>
        </html>
    );
}
