import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const HeroTheTwo: React.FC<CardData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4 ">
            <div className="md:w-1/2 px-4 bg-gray-800 py-4 m-3 rounded-box ">
                <h2 className="text-4xl font-bold leading-tight mb-12 p-2 bg-primary rounded-btn">{title}</h2>
                <p className="text-xl mb-4">{description}</p>
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0">
                <img src={imageUrl} alt={imageAlt} className="w-full rounded-xl" />
            </div>
        </div>
    );
};

export default HeroTheTwo;
