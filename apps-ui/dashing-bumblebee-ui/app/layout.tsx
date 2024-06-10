import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { NavBar,NavigationMenu, Footer } from '@molitio/ui-core';
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
                    licenceText={ApplicationContextRoot.contentRoot['common'].leafs['footer'].textContent['maintainer']}
                />
            </body>
        </html>
    );
}
