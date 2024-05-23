import React from 'react';
import { CardData } from '../types';

const Card: React.FC<CardData> = (props) => {
    const { title, description, imageUrl, imageAlt } = props;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={imageUrl} alt={imageAlt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title"> {title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Card;
