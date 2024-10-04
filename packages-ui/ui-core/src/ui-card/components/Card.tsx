import React from 'react';
import { CardData } from '../types';

export type CardProps = {
    data: CardData;
};

const Card: React.FC<CardProps> = (props) => {
    const { title, imageUrl, imageAlt, description } = props.data;
    return (
        <div>
            <div className="flex-col mb-4">
                <img src={imageUrl} alt={imageAlt} className="image" />
            </div>

            <div className="flex-col mb-4 p-4">
                <h2 className="text-4xl font-bold py-4 text-start">{title}</h2>
                <h3 className=" text-4xl p-5">{description}</h3>
            </div>
        </div>
    );
};

export default Card;
