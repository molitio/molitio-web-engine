import React from 'react';
import { VerticalCardData } from '../types';
import '../style/style.css';

const VerticalCard: React.FC<VerticalCardData> = (props) => {
    const { title, imageUrl, imageAlt } = props;
    return (
        <div className="w-full bg flex items-center align-middle bg-base-100 shadow-xl relative">
            <figure className="flex-none w-2/4 h-full relative overflow-hidden">
                <div className="square">
                    <img src={imageUrl} alt={imageAlt} className="object-cover w-full h-full non-square" />
                </div>
            </figure>
            <div className="flex-grow p-4">
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
    );
};

export default VerticalCard;
