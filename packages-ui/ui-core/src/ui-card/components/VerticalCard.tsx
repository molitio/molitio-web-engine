import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const VerticalCard: React.FC<CardData> = (props) => {
    const { title, description } = props;
    return (
        <div className="w-full bg flex items-center bg-primary rounded-box align-middle relative m-3">
            <div className="flex-grow p-4 bg-gray-800 rounded-box m-3 py-3">
                <h2 className="card-title text-white py-3 bg-primary w-1/4 rounded-box m-2 pl-2">{title}</h2>
                <p className='text-white'>{description}</p>
            </div>
        </div>
    );
};

export default VerticalCard;
