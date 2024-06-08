import React from 'react';
import type { VerticalCardData } from '../types';
import VerticalCard from './VerticalCard';

export type VerticalCardContainerProps = {
    cards: VerticalCardData[];
};

const VerticalCardContainer: React.FC<VerticalCardContainerProps> = (props) => {
    const { cards } = props;

    return (
        <div className="w-full flex-wrap">
            {cards.map((card, i) => (
                <VerticalCard
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
export default VerticalCardContainer;
