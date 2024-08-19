import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const InfoPanel: React.FC<CardData> = (props) => {
    const { title, description } = props;
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center bg-secondary p-3 m-3 font-press-start">
            <div className="md:w-1/2 text-center ">
                <h2 className="text-4xl font-bold leading-tight mb-4 p-2 bg-neutral  m-4 rounded-full ">
                    {title}
                </h2>
            </div>
            <div className=" w-1/2 mb-10 md:mb-0 text-black text-2xl ">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoPanel;
