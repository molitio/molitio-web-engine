import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const HeroTheTwo: React.FC<CardData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="container  ">
            
            <div className="md:w-1/1 mb-10 md:mb-0">
            <h2 className="text-4xl font-bold leading-tight mb-8 p-2 bg-primary rounded-btn">{title}</h2>
                <p className="text-xl mb-4 p-2">{description}</p>
                <img src={imageUrl} alt={imageAlt} className="rounded-xl" />
                
            </div>
        </div>
    );
};

export default HeroTheTwo;
