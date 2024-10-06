import React from 'react';
import type { CardData } from '../../ui-card/types';
import PageSection from './PageSection';

export type InfoPanelContainerProps = {
    cards: CardData[];
};

const InfoPanelContainer: React.FC<InfoPanelContainerProps> = (props) => {
    const { cards } = props;

    return (
        <PageSection>
            {cards.map((card, i) => (
                <li key={i} className="list-none mb-gutter-bottom">
                    <h2 className="text-2xl xl:text-4xl text-left font-bold mb-gutter-bottom">{card?.title}</h2>
                    <p className="text-1xl xl:text-3xl text-left w-8/12  pl-8 ">{card?.description}</p>
                </li>
            ))}
        </PageSection>
    );
};

export default InfoPanelContainer;
