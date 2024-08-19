import React from 'react';
import type { CardData } from '../types';
import InfoPanel from './InfoPanel';
import '../style/style.css';

export type InfoPanelContainerProps = {
    cards: CardData[];
};

const InfoPanelContainer: React.FC<InfoPanelContainerProps> = (props) => {
    const { cards } = props;

    return (
        <div className="bg-primary text-white p-5">
            {cards.map((card, i) => (
                <InfoPanel key={i} title={card.title} description={card.description} />
            ))}
        </div>
    );
};

export default InfoPanelContainer;
