import React from 'react';
import { CardData } from '../types';

const Card: React.FC<CardData> = (props) => {
    const { title, imageUrl, imageAlt } = props;
    return (
        <div className="card hover:shadow-lg hover:shadow-gray-400 flex flex-nowrap overflow-x-auto card-side bg-base-100 shadow-xl flex flex-col items-stretch m-4">
            <figure className="flex-1 ">
                <img src={imageUrl} alt={imageAlt} className="w-32 md:w-32" />
            </figure>
            <div className="flex-1 card-body max-h-2">
                <h2 className="card-title"> {title}</h2>
            </div>
        </div>
    );
};

export default Card;
