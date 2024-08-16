import React from 'react';
import type { CardData } from '../types';
import CardTheTwo from './CardTheTwo';

export type CardTheTwoContainerProps = {
    cards: CardData[];
};

const CardTheTwoContainer: React.FC<CardTheTwoContainerProps> = (props) => {
    const { cards } = props;

    return (
        <div className="bg-primary
        grid 
        sm:grid-cols-3 
        gap-4 
        sm:gap-6 
        
        rounded-box ">
            {cards.map((card, i) => (
                <CardTheTwo key={i} title={card.title} description={card.description} imageUrl={card.imageUrl} />
            ))}
        </div>
    );
};
export default CardTheTwoContainer;
