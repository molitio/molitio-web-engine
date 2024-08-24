import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const HeroTheTwo: React.FC<CardData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="container ">
            <div className=" text-center">
                <h2 className="text-5xl font-bold  mb-2   font-press-start p-5">{title}</h2>
                <h3 className="text-4xl mb-4  font-press-start">{description}</h3>
            </div>
        </div>
    );
};

export default HeroTheTwo;
