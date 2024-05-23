import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ApplicationContextRoot } from '../context';
import { NavBar, Footer} from '@molitio/ui-core';

import './styles/globals.css';

export const metadata: Metadata = {
    title: ApplicationContextRoot.contentRoot['common'].leafs['app'].textContent['appTitle'],
    description: ApplicationContextRoot.contentRoot['common'].leafs['app'].textContent['appDescription'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html data-theme="dashing-bumblebee">
            <body>
                <div className="hero min-h-screen bg-base-200">
                    <div style={{ margin: '0 0 0 1em', position: 'absolute', zIndex: 5 }}></div>
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
                    <div>{children}</div>
                </div>
              
                <Footer licenceText={ApplicationContextRoot.contentRoot['common'].leafs['footer'].textContent['maintainer']} />
            </body>
        </html>
    );
}
