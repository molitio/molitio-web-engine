import React from 'react';
import type { InfoPanelData } from '../types';
import InfoPanel from './InfoPanel';
import '../style/style.css';

export type InfoPanelContainerProps = {
    cards: InfoPanelData[];
};

const InfoPanelContainer: React.FC<InfoPanelContainerProps> = (props) => {
    const { cards } = props;

    return (
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 md:px-24 md:py-16 lg:px-8 lg:py-20 primary">
            {cards.map((card, i) => (
                <InfoPanel key={i} title={card.title} description={card.description} />
            ))}
        </div>
    );
};

export default InfoPanelContainer;
