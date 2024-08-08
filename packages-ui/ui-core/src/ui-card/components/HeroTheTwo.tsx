import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const HeroTheTwo: React.FC<CardData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="container bg-primary">
            
            <div className="md:w-1/1 mb-10 md:mb-0 p-4 text-center">
            <h2 className="bg-secondary  w-1/2 text-5xl font-bold  mb-8 p-2 rounded-btn font-press-start">{title}</h2>
                <p className="text-3xl mb-4 p-2 font-press-start bg-secondary">{description}</p>
                <img src={imageUrl} alt={imageAlt} className="rounded-xl" />
                
            </div>
        </div>
    );
};

export default HeroTheTwo;
