import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const Card: React.FC<CardData> = (props) => {
    const { title, imageUrl, description } = props;
    return (
        <div className="flex flex-col items-center sm:gap-6 rounded-box m-4 p-4 text-white bg-gray-800">
            <div className="text-center max-w-xs ">
                <div className="relative w-28 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto">
                    <div className="z-10 relative w-full h-full rounded-full border border-gray-300 shadow flex items-center justify-center">
                        {imageUrl}
                    </div>
                    <div className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-full"></div>
                </div>
                <h3 className="font-headline text-md sm:text-lg mt-2 bg-primary py-1 rounded-box">{title}</h3>
                <p className="leading-normal mt-2 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default Card;
