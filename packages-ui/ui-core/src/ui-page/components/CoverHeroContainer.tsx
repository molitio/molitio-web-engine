import React from 'react';
import { CardData } from '../../ui-card/types';
import PageSection from './PageSection';

export type HeroTheOneContainerProps = {
    cards: CardData[];
};

const CoverHeroContainer: React.FC<HeroTheOneContainerProps> = (props) => {
    const { cards } = props;

    return (
        <PageSection>
            <ul>
                {cards.map((card, i) => (
                    <li key={i} className="flex flex-col items-center mx-auto pt-[120px] pb-gutter-bottom">
                        <img src={card?.imageUrl} alt={card?.imageAlt} className="w-8/12" />
                        <h1 className="text-2xl xl:text-4xl pb-gutter-bottom">{card?.description}</h1>
                    </li>
                ))}
            </ul>
        </PageSection>
    );
};

export default CoverHeroContainer;
