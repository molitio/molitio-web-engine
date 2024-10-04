import React from 'react';
import { CardData } from '../types';

const HeroTheOne: React.FC<CardData> = (props) => {
    const { description, imageUrl, imageAlt } = props;

    return (
        <div className="container mx-auto flex flex-col items-center w-full py-3">
            <img src={imageUrl} alt={imageAlt} className="rounded-box " />

            <h1 className="text-4xl font-bold  ">{description}</h1>
        </div>
    );
};

export default HeroTheOne;
