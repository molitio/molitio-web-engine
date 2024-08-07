import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const HeroTheOne: React.FC<CardData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start ">
            <div>
                <img src={imageUrl} alt={imageAlt} className="w-full rounded-xl" />
            </div>
            
            
        </div>
    );
};

export default HeroTheOne;
