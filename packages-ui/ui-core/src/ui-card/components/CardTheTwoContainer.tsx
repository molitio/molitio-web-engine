import React from 'react';
import type { CardData } from '../types';
import CardTheTwo from './CardTheTwo';

export type CardTheTwoContainerProps = {
    cards: CardData[];
};

const CardTheTwoContainer: React.FC<CardTheTwoContainerProps> = (props) => {
    const { cards } = props;

    return (
        <div className="flex flex-row align-items-center justify-center my-4">
            {cards.map((card, i) => (
                <CardTheTwo key={i} title={card.title} description={card.description} imageUrl={card.imageUrl} />
            ))}
        </div>
    );
};
export default CardTheTwoContainer;
