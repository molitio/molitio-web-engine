import React from 'react';
import type { ShowcaseData } from '../types';
import ShowcaseItem from './ShowcaseItem';

export type ShowcaseContainerProps = {
    cards: ShowcaseData[];
};

const ShowcaseContainer: React.FC<ShowcaseContainerProps> = (props) => {
    const { cards } = props;
    return (
        <div
        className={`
        bg-primary
        grid 
        sm:grid-cols-3 
        gap-4 
        sm:gap-6 
        mt-4 
        sm:mt-8
        `}
        >
            {cards.map((card, i) => (
                <ShowcaseItem
                    key={i}
                    title={card.title}
                    subTitle={card.subTitle} 
                />
            ))}
        </div>
    )
};

export default ShowcaseContainer;