import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const HeroTheOne: React.FC<CardData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start ">
            <div className="md:w-1/2 m-3">
                <img src={imageUrl} alt={imageAlt} className="w-full rounded-xl" />
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0 bg-gray-800 rounded-xl m-3 p-4">
                <h2 className="text-4xl font-bold leading-tight mb-4 bg-primary w-1/2 rounded-box p-1">{title}</h2>
                <p className="text-xl mb-4">{description}</p>
            </div>
        </div>
    );
};

export default HeroTheOne;
