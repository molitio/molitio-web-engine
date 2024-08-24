import React from 'react';
import type { CardData } from '../types';
import HeroTheTwo from './HeroTheTwo';
import '../style/style.css';
export type HeroTheTwoContainerProps = {
    cards: CardData[];
};

const HeroTheTwoContainer: React.FC<HeroTheTwoContainerProps> = (props) => {
    const { cards } = props;

    return (
        <div>
            <div className="container overflow-hidden ">
                {cards.map((card, i) => (
                    <HeroTheTwo
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

export default HeroTheTwoContainer;
