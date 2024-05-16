import React from 'react';
import Image from 'next/image';
import type { Metadata } from 'next';
import { ApplicationContextRoot } from '../context';
import { NavBar } from '@molitio/ui-core';
import './styles/globals.css';

export const metadata: Metadata = {
    title: ApplicationContextRoot.contentRoot['common'].leafs['app'].textContent['appTitle'],
    description: ApplicationContextRoot.contentRoot['common'].leafs['app'].textContent['appDescription'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div style={{ margin: '0 0 0 1em', position: 'absolute', zIndex: 5 }}>
                <Image
                    src={ApplicationContextRoot.contentRoot['common'].leafs['app'].assetUrls['logoSvg']}
                    alt={'logo'}
                    width={300}
                    height={100}
                />
            </div>
            <NavBar />
            <div>{children}</div>
        </div>
    );
}
