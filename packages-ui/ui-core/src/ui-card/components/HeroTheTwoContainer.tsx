import React from 'react';
import type { CardData } from '../types';
import HeroTheTwo from './HeroTheTwo';
import { useAtom } from 'jotai';
import { contentRootAtomRW } from '../../context';
export type HeroTheTwoContainerProps = {
    cards: CardData[];
};

const HeroTheTwoContainer: React.FC<HeroTheTwoContainerProps> = (props) => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const heroTheTwoData: CardData[] = contentRootLeafs['heroTheTwo']?.textContentCollection ?? [];

    return (
        <div className="bg-primary rounded-box text-white mb-5">
            {heroTheTwoData.map((card, i) => (
                <HeroTheTwo
                    key={i}
                    title={card.title}
                    description={card.description}
                    imageUrl={card.imageUrl}
                    imageAlt={card.imageAlt}
                />
            ))}
        </div>
    );
};

export default HeroTheTwoContainer;
