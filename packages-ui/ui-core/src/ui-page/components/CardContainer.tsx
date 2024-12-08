import React from 'react';
import Card from '../../ui-card/components/Card';
import type { CardData } from '../../ui-card/types';
import PageSection from './PageSection';
export type CardContainerProps = {
    cards: CardData[];
};

const CardContainer: React.FC<CardContainerProps> = (props) => {
    const { cards } = props;

    return (
        <PageSection>
            <ul className="flex flex-col xl:flex-row gap-12">
                {cards.map((card, i) => (
                    <li key={i} className="mb-gutter-bottom">
                        <Card data={card} />
                    </li>
                ))}
            </ul>
        </PageSection>
    );
};

export default CardContainer;
