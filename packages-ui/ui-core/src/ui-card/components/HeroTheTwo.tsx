import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const HeroTheTwo: React.FC<CardData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="container mx-auto flex flex-col items-center">
            
                <img src={imageUrl} alt={imageAlt} className="w-full rounded-box " />
                <div>
                <h2 className="text-5xl font-bold ">{title}</h2>
                <h3 className="text-4xl ">{description}</h3>
                </div>
                
            
        </div>
    );
};

export default HeroTheTwo;
