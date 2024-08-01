import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const InfoPanel: React.FC<CardData> = (props) => {
    const { title, description } = props;
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4 border rounded-box m-3 ">
            <div className="md:w-1/2 ">
                <h2 className="text-4xl font-bold leading-tight mb-4 p-5 underline ">
                    {title}
                </h2>
            </div>
            <div className="md:w-1/2 mb-10 md:mb-0">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoPanel;
