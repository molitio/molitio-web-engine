import React from 'react';
import type { CardData } from '../types';
import HeroTheTwo from './HeroTheTwo';
import '../style/style.css';
import { useAtom } from 'jotai';
import { contentRootAtomRW } from '../../context';
export type HeroTheTwoContainerProps = {
    cards: CardData[];
};

const HeroTheTwoContainer: React.FC<HeroTheTwoContainerProps> = (props) => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const heroTheTwoData: CardData[] = contentRootLeafs['heroTheTwo']?.textContentCollection ?? [];
    const { cards } = props;

    return (
        <div>
            <div className="container">
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
        </div>
    );
};

export default HeroTheTwoContainer;
