import React from 'react';
import { CardData } from '../types';

const VerticalCard: React.FC<CardData> = (props) => {
    const { title, description } = props;
    return (
        <div className="w-full bg flex items-center bg-primary rounded-box align-middle relative m-3">
            <div className="flex-grow p-4 bg-gray-800 rounded-box m-3 py-3">
                <h2 className="card-title text-4xl  text-white py-4 bg-primary w-1/4 font-bold ">{title}</h2>
                <p className="text-white">{description}</p>
            </div>
        </div>
    );
};

export default VerticalCard;
