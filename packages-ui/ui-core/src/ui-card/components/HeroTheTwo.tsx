import React from 'react';
import { CardData } from '../types';

const HeroTheTwo: React.FC<CardData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="container mx-auto flex flex-col items-center pb-gutter-bottom">
            <img src={imageUrl} alt={imageAlt} className=" rounded-box pb-gutter-bottom" />

            <h2 className="text-5xl font-bold pb-gutter-bottom">{title}</h2>
            <h3 className="text-4xl pb-gutter-bottom">{description}</h3>
        </div>
    );
};

export default HeroTheTwo;
