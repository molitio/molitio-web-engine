import React from 'react';
import { HeroTheOneData } from '../types';
import '../style/style.css';

const HeroTheOne: React.FC<HeroTheOneData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-4">
            <div className="md:w-1/2 px-4">
                <img src={imageUrl} alt={imageAlt} className="w-full rounded-xl" />
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0">
                <h2 className="text-4xl font-bold leading-tight mb-4">{title}</h2>
                <p className="text-xl mb-4">{description}</p>
            </div>
        </div>
    );
};

export default HeroTheOne;
