import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const HeroTheTwo: React.FC<CardData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="container">
            
            <div className="md:w-1/1 mb-10 md:mb-0 p-4 text-center overflow-hidden">
            <h2 className="text-5xl font-bold  mb-2 p-2  font-press-start">{title}</h2>
                <p className="text-3xl font-bold mb-4 p-4 font-press-start py-10">{description}</p>
                <img src={imageUrl} alt={imageAlt} />
                
            </div>
        </div>
    );
};

export default HeroTheTwo;
