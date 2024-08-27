import React from 'react';
import { CardData } from '../types';
import '../style/style.css';


const Card: React.FC<CardData> = (props) => {
    const { title, imageUrl, imageAlt, description } = props;
    return (
        <div className="flex flex-col items-center sm:gap-6 rounded-box m-4 p-4 text-white bg-secondary hover:bg-base-content">
            <div className="text-center max-w-xs p-3">
                <div className="w-32 h-30 sm:w-28 sm:h-28 lg:w-40 lg:h-40 mx-auto">
                    <div className="z-10 relative w-full h-full flex items-center justify-center">
                        <img src={imageUrl} alt={imageAlt} className="w-full rounded-xl" />
                    </div>
                
                </div>
                <h2 className=" text-5xl  mt-2 bg-neutral  rounded-box  p-4">
                    {title}
                </h2>
                <h3 className="rounded-box p-3">{description}</h3>
            </div>
        </div>
    );
};

export default Card;
