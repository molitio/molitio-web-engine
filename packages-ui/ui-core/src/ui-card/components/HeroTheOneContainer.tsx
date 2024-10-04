import React from 'react';
import { CardData } from '../types';
import HeroTheOne from './HeroTheOne';
import { useAtom } from 'jotai';
import { contentRootAtomRW } from '../../context';

export type HeroTheOneContainerProps = {
    cards: CardData[];
};

const HeroTheOneContainer: React.FC<HeroTheOneContainerProps> = (props) => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const heroTheOneData: CardData[] = contentRootLeafs['heroTheOne']?.textContentCollection ?? [];

    return (
        <div className="">
            <div className="bg-primary rounded-box py-5">
                {heroTheOneData.map((card, i) => (
                    <HeroTheOne
                        key={i}
                        title={card.title}
                        description={card.description}
                        imageUrl={card.imageUrl}
                        imageAlt={card.imageAlt}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroTheOneContainer;
