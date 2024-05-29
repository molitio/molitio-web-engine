import React from 'react';
import { CardData } from '../types';

const Card: React.FC<CardData> = (props) => {
    const { title, imageUrl, imageAlt } = props;
    return (
        <div className="card cursor-pointer hover:shadow-lg hover:shadow-gray-400 card-side bg-base-100 shadow-xl flex flex-col items-stretch">
            <figure className="flex-1 ">
                <img src={imageUrl} alt={imageAlt} className="size-8" />
            </figure>
            <div className="flex-1 card-body max-h-4">
                <h2 className="card-title"> {title}</h2>
            </div>
        </div>
    );
};

export default Card;
