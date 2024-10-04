import React from 'react';
import { CardData } from '../types';

const InfoPanel: React.FC<CardData> = (props) => {
    const { title, description } = props;
    return (
        <div className="container mx-auto flex flex-col">
            <div className="md:w-1/2 ">
                <h2 className="text-4xl font-bold py-4">{title}</h2>
            </div>
            <div className=" w-1/2 mb-10 md:mb-0 text-4xl py-2">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoPanel;
