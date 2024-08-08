import React from 'react';
import { CardData } from '../types';
import HeroTheOne from './HeroTheOne';

export type HeroTheOneContainerProps = {
    cards: CardData[];
};

const HeroTheOneContainer: React.FC<HeroTheOneContainerProps> = (props) => {
    const { cards } = props;

    return (
        <div>
            <div className="bg-primary text-white rounded-box ">
                {cards.map((card, i) => (
                    <HeroTheOne
                        key={i}
                        title={card.title}
                        description={card.description}
                         imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroTheOneContainer;
