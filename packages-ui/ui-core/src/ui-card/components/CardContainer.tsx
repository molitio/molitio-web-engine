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
        flex
        container
        md:container 
        md:mx-auto
        mx-auto
        align-items-center 
        justify-center 
        my-4
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
