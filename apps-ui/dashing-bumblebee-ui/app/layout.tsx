import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Provider } from 'react-redux';
import { NavBar, Footer, appContext } from '@molitio/ui-core';
import { ApplicationContextRoot } from '../context';

import './styles/globals.css';

export const metadata: Metadata = {
    title: ApplicationContextRoot.contentRoot['common'].leafs['app'].textContent['appTitle'],
    description: ApplicationContextRoot.contentRoot['common'].leafs['app'].textContent['appDescription'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html data-theme="dashing-bumblebee">
            <body>
         {/*        <Provider store={appContext}> */}
                    <section>
                        <NavBar
                            logo={
                                <Image
                                    src={ApplicationContextRoot.contentRoot['common'].leafs['app'].assetUrls['logoSvg']}
                                    alt={'logo'}
                                    width={300}
                                    height={100}
                                />
                            }
                        />
                    </section>
                    <main>{children}</main>
                    <Footer
                        licenceText={
                            ApplicationContextRoot.contentRoot['common'].leafs['footer'].textContent['maintainer']
                        }
                    />
         {/*        </Provider> */}
            </body>
        </html>
    );
}
