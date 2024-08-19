import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const HeroTheTwo: React.FC<CardData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="container items-stretch">
            <div className="md:w-1/1 mb-10 md:mb-0  text-center  overflow-hidden">
                <h2 className="text-5xl font-bold  mb-2 p-2  font-press-start">{title}</h2>
                <p className="text-3xl font-bold mb-4  font-press-start ">{description}</p>
            </div>
        </div>
    );
};

export default HeroTheTwo;
