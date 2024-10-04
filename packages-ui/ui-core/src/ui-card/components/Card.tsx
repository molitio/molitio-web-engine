import React from 'react';
import { CardData } from '../types';

export type CardProps = {
    data: CardData;
};

const Card: React.FC<CardProps> = (props) => {
    const { title, imageUrl, imageAlt, description } = props.data;
    return (
        <div className="min-w-4xl flex flex-col items-center">
            <div className="min-w-80 min-h-80 max-w-96 max-h-96 mb-8">
                <img src={imageUrl} alt={imageAlt} className="min-w-80 min-h-80 object-cover rounded-full" />
            </div>
            <div className="text-left min-w-4xl">
                <h2 className="text-4xl font-bold text-center">{title}</h2>
                <h3 className="text-4xl pl-4">{description}</h3>
            </div>
        </div>
    );
};

export default Card;
