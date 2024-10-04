'use client';

import {
    InfoPanelContainer,
    CardData,
    CardContainer,
    HeroTheOneContainer,
    HeroTheTwoContainer,
    contentRootAtomRW,
} from '@molitio/mwe-ui-core';
import { useAtom } from 'jotai';

export default function Page() {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const heroTheTwoData: CardData[] = contentRootLeafs['heroTheTwo']?.textContentCollection ?? [];
    const heroTheOneData: CardData[] = contentRootLeafs['heroTheOne']?.textContentCollection ?? [];
    const cardData: CardData[] = contentRootLeafs['coverCards']?.textContentCollection ?? [];
    const infoPanelData: CardData[] = contentRootLeafs['infoPanels']?.textContentCollection ?? [];

    return (
        <section className="hero bg-gray-800">
            <div className="hero-content flex-col">
                <HeroTheOneContainer cards={heroTheOneData} />
                <HeroTheTwoContainer cards={heroTheTwoData} />
                <CardContainer cards={cardData} />
                <InfoPanelContainer cards={infoPanelData} />
                <div className="space py-10" />
            </div>
        </section>
    );
}
