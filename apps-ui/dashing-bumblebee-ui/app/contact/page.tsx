'use client';

import React from 'react';
import { ContactCardContainer, CardData, contentRootAtomRW, ContactCardData } from '@molitio/mwe-ui-core';
import { useAtom } from 'jotai';

export default function Page() {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const cardTheTwoData: ContactCardData[] = contentRootLeafs['contactCardCover']?.textContentCollection ?? [];

    return (
        <section className="hero min-h-screen bg-gray-800 items-start">
            <div className="hero-content bg top-0 z-1 flex-col py-2">
                <div className="container">
                    <h2 className="text-white font-bold text-4xl align-items-center">Elérhetőségeink:</h2>
                </div>
                <div className="w-full mb-4 text-3xl py-2 rounded-box">
                    <ContactCardContainer cards={cardTheTwoData} />
                </div>
            </div>
        </section>
    );
}
