import React from 'react';
import { CardData } from '../types';

const Card: React.FC<CardData> = (props) => {
    const { title, imageUrl, imageAlt } = props;
    return (
        <div className={`
        card
        w-32
        h-32
        sm:w-32
        sm:h-32
        md:w-64
        md:h-64 
        hover:shadow-lg 
        hover:shadow-gray-400 
        shrink
        flex 
        flex-nowrap 
        card-side 
        bg-base-100 
        shadow-xl 
        flex-col 
        items-stretch 
        m-4`}>
            <figure className="flex-1 ">
                <img src={imageUrl} alt={imageAlt}/>
            </figure>
            <div className="flex-1 card-body max-h-2">
                <h2 className="card-title"> {title}</h2>
            </div>
        </div>
    );
};

export default Card;
