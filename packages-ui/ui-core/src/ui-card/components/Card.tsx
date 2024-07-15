import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const Card: React.FC<CardData> = (props) => {
    const { title, imageUrl, imageAlt, description } = props;
    return (
        <div
            className={`
        hover:shadow-lg
        rounded-lg 
        hover:shadow-blue-400 
        flex
        justify-center
        card-side 
        shadow-xl 
        flex-col 
        items-center 
        m-4
        card-background`}
        >
            <figure className="flex-1  flex justify-center items-center  rounded-full">
                <img src={imageUrl} alt={imageAlt} className="rounded-full w-32 h-32 object-cover" />
            </figure>
            <div className="flex-1 card-body flex flex-col justify-center items-center text-center text-white ">
                <h3 className="card-title"> {title}</h3>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};

export default Card;
