import React from 'react';
import { CardContainerProps, CardData } from '../types';
import Card from './Card';

const CardContainer: React.FC<CardContainerProps> = (props) => {
    const { cards } = props;
    return (
        <div className="flex">
            {cards.map((card: CardData, i) => {
                return <Card key={i} title={card.title} description={card.description} imageUrl={card.imageUrl} imageAlt={card.imageAlt}/>;
            })}
        </div>
    );
};
export default CardContainer;
