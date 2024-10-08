import React from 'react';
import type { CardData } from '../../ui-card/types';
import PageSection from './PageSection';
export type HeroTheTwoContainerProps = {
    cards: CardData[];
};

const CoverDetailsContainer: React.FC<HeroTheTwoContainerProps> = (props) => {
    const { cards } = props;

    return (
        <PageSection>
            <ul>
                {cards.map((card, i) => (
                    <li key={i} className="flex flex-col items-center mx-auto pb-gutter-bottom ">
                        <img
                            src={card?.imageUrl}
                            alt={card?.imageAlt}
                            className="sm:w-10/12 xl:w-full  pb-gutter-bottom"
                        />
                        <h2 className="text-3xl xl:text-5xl font-bold pb-gutter-bottom">{card?.title}</h2>
                        <h3 className="text-2xl xl:text-4xl pb-gutter-bottom">{card?.description}</h3>
                    </li>
                ))}
            </ul>
        </PageSection>
    );
};

export default CoverDetailsContainer;
