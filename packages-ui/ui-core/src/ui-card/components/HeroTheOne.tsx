import React from 'react';
import { HeroTheOneData } from '../types';
import '../style/style.css'; 

const HeroTheOne: React.FC<HeroTheOneData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;

    return (
        <div className="w-full bg flex items-center align-middle bg-base-100 shadow-xl hero overflow-hidden">
            <figure className="flex-none w-2/4 h-full sm:w-1/2 p-10">
                <img src={imageUrl} alt={imageAlt} className="object-cover w-full h-full"/>
            </figure>
            <div className='heroSquareTheTwo'>
            
            <div className="p-8 text-white heroTextTheTwo">           
                <h2 className="text-2xl font-bold ">{title}</h2>
                <div>
                    <p>{description}</p>
                </div>
            </div>
            </div>
            
            
        </div>
    );
};

export default HeroTheOne;