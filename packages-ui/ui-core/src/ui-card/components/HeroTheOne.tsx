import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const HeroTheOne: React.FC<CardData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="container flex flex-col md:flex-row items-start ">
            
                <img src={imageUrl} alt={imageAlt} className="w-full" />
                <h2 className="text-5xl font-bold  mb-2  p-5">{title}</h2>
                <h3 className="text-4xl mb-4 ">{description}</h3>
            
        </div>
    );
};

export default HeroTheOne;
