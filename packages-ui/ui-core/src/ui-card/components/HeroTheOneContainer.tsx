import React from 'react';
import type { HeroTheOneData } from '../types';
import HeroTheOne from './HeroTheOne';

export type HeroTheOneContainerProps = {
    cards: HeroTheOneData[];
};

const HeroTheOneContainer: React.FC<HeroTheOneContainerProps> = (props) => {
    const { cards } = props;

    return (
        <div>
            <div className="bg-primary text-white ">
                {cards.map((card, i) => (
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
