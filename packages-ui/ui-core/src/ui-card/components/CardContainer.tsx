import React from 'react';
import type { CardData } from '../types';
import Card from './Card';
import { contentRootAtomRW } from '../../context';
import { useAtom } from 'jotai';

export type CardContainerProps = {
    cards: CardData[];
};

const CardContainer: React.FC<CardContainerProps> = ( ) => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const cardData: CardData[] = contentRootLeafs['coverCards']?.textContentCollection ?? [];
    return (
        <div
            className={"text-white bg-primary flex mb-4 sm:grid-cols-1 rounded-box "}
        >
            {cardData.map((card, i) => (
                <Card
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

export default CardContainer;
