import React from 'react';
import { VerticalCardData } from '../types';

const VerticalCard: React.FC<VerticalCardData> = (props) => {
    const { title, imageUrl, imageAlt } = props;
    return (
        <div className="w-full flex items-center align-middle bg-base-100 shadow-xl ">
            <figure className="flex-none w-2/4 h-full">
                <img src={imageUrl} alt={imageAlt} className="object-cover w-full h-full"/>
            </figure>
            <div className="flex-grow p-4">
                <h2 className="card-title"> {title}</h2>
            </div>
        </div>
    );
};

export default VerticalCard;
