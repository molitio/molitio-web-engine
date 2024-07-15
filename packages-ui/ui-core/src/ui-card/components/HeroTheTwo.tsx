import React from 'react';
import { HeroTheTwoData } from '../types';
import '../style/style.css';

const HeroTheTwo: React.FC<HeroTheTwoData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="w-full flex items-center align-middle bg-base-100 shadow-xl hero overflow-hidden">
            <div className="heroSquare">
                <div className="p-8 text-white heroText">
                    <h2 className="text-2xl font-bold ">{title}</h2>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>

            <figure className="flex-none w-2/4 h-full">
                <img src={imageUrl} alt={imageAlt} className="object-cover w-full h-full" />
            </figure>
        </div>
    );
};

export default HeroTheTwo;
