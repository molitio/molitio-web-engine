import React from 'react';
import type { CardData } from '../types';
import Card from './Card';

export type CardContainerProps = {
    cards: CardData[];
};

const CardContainer: React.FC<CardContainerProps> = (props) => {
    const { cards } = props;

    return (
        <div
        className={`
        grid 
        sm:grid-cols-3 
        gap-4 
        sm:gap-6 
        mt-4 
        sm:mt-8
        `}
        >
            {cards.map((card, i) => (
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

