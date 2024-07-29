'use client';

import React from 'react';
import { ApplicationContextRoot } from '../../context';
import { HeroTheTwoContainer, CardData, contentRootAtomRW } from '@molitio/ui-core';
import '../styles/globals.css';
import { useAtom } from 'jotai';
export default function Page() {
    const [contentRoot] = useAtom(contentRootAtomRW);

    const contentRootLeafs = contentRoot['home'].leafs ?? {};
    const heroTheTwoData: CardData[] = contentRootLeafs['heroTheTwo'].textContentCollection ?? [];
    return (
        <section className="hero min-h-screen py-12">
            <div className="hero-content bg top-0 z-1 flex-col py-2">
                <div className="w-full mb-4 py-2">
                    <HeroTheTwoContainer cards={heroTheTwoData} />
                </div>
            </div>
        </section>
    );
}
