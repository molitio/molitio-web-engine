import React from 'react';
import type { CardData } from '../types';
import CardTheTwo from './CardTheTwo';
import { useAtom } from 'jotai';
import { contentRootAtomRW } from '../../context';

export type CardTheTwoContainerProps = {
    cards: CardData[];
};

const CardTheTwoContainer: React.FC<CardTheTwoContainerProps> = (props) => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const cardTheTwoData: CardData[] = contentRootLeafs['coverCardsSecondary']?.textContentCollection ?? [];
    const { cards } = props;

    return (
        <div
            className="bg-primary
         
        sm:grid-cols-3 
        gap-4 
        sm:gap-6 
        flex
        rounded-box "
        >
            {cardTheTwoData.map((card, i) => (
                <CardTheTwo key={i} title={card.title} description={card.description} imageUrl={card.imageUrl} />
            ))}
        </div>
    );
};
export default CardTheTwoContainer;
