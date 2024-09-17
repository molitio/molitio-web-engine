import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const Card: React.FC<CardData> = (props) => {
    const { title, imageUrl, imageAlt, description } = props;
    return (              
        <div className='flex flex-col items-center m-4 p-4 text-white bg-secondary '>
            <img src={imageUrl} alt={imageAlt} className='image' />
            <h2 className='text-4xl font-bold py-4 text-start'>{title}</h2>
            <div >
            <h3 className=' text-4xl p-5'>{description}</h3>
            </div>
        </div>    
    );
};

export default Card;
