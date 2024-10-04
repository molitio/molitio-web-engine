import React from 'react';
import { CardData } from '../types';

const HeroTheOne: React.FC<CardData> = (props) => {
    const { description, imageUrl, imageAlt } = props;

    return (
        <div className="container mx-auto flex flex-col items-center pb-gutter-bottom">
            <img src={imageUrl} alt={imageAlt} />
            <h1 className="text-4xl text-slate-300  pb-gutter-bottom">{description}</h1>
        </div>
    );
};

export default HeroTheOne;
