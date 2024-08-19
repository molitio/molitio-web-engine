'use client';

import React from 'react';
import { ApplicationContextRoot } from '../../context';
import { InfoPanelContainer, CardData, contentRootAtomRW, VerticalCardContainer } from '@molitio/mwe-ui-core';
import '../styles/globals.css';
import { useAtom } from 'jotai';
export default function Page() {
    const [contentRoot] = useAtom(contentRootAtomRW);

    const contentRootLeafs = contentRoot['home'].leafs ?? {};
    const serviceTheOneData: CardData[] = contentRootLeafs['serviceTheOne'].textContentCollection ?? [];

    return (
        <section className="hero min-h-screen bg-gray-800 items-start">
            <div className="hero-content bg top-0 z-1 flex-col py-2">
                <div className="container">
                    <h2 className="text-white font-bold text-4xl align-items-center">
                        Miben segítünk Önnek szállítmányozó cégként?
                    </h2>
                </div>
                <div className="w-full mb-4 py-2 rounded-box">
                    <VerticalCardContainer cards={serviceTheOneData} />
                </div>
                <div className="container">
                    <h2 className="text-white font-bold text-4xl align-items-center">Kérjen Ajánlatot Még Ma</h2>
                </div>
            </div>
        </section>
    );
}
