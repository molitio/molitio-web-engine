import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const CardTheTwo: React.FC<CardData> = (props) => {
    const { title, imageUrl,imageAlt, description } = props;
    return (
        <div className={"flex flex-col items-center gap-4 sm:gap-6 my-3 rounded-box font-press-start bg-secondary p-3 hover:bg-base-content"}
        >
            <figure className="rounded-full relative w-28 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto">
                <img src={imageUrl} alt={imageAlt} className="rounded-full w-32 h-32 object-cover" />
            </figure>
            <div className="flex-1 card-body flex flex-col justify-center items-center text-center ">
                <h3 className="card-title "> {title}</h3>
                <p className="text-2xl font-bold  underline">{description}</p>
            </div>
        </div>
    );
};

export default CardTheTwo;
