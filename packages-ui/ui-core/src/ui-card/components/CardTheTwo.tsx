import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const CardTheTwo: React.FC<CardData> = (props) => {
    const { title, imageUrl, description } = props;
    return (
        <div
            className={`
        hover:shadow-lg 
        hover:shadow-gray-400 
        shrink
        flex 
        flex-nowrap 
        justify-center
        bg-white
        rounded-lg
        card-side 
        shadow-xl 
        flex-col 
        items-center 
        m-4 `}
        >
            <figure className="flex-1 max-w-20 flex justify-center card-background items-center   rounded-full">
                <img src={imageUrl} className="rounded-full w-32 h-32 object-cover" />
            </figure>
            <div className="flex-1 card-body flex flex-col justify-center items-center text-center ">
                <h3 className="card-title"> {title}</h3>
                <p className="text-sm">{description}</p>
            </div>
        </div>
    );
};

export default CardTheTwo;
