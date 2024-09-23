import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const Card: React.FC<CardData> = (props) => {
    const { title, imageUrl, imageAlt, description } = props;
    return (              
        <div className='card flex items-center p-4 text-white '>
            <div className='flex-col '>
            <img src={imageUrl} alt={imageAlt} className='image' />
            </div>
            <div className='flex-col  p-4'>
            <h2 className='text-4xl font-bold py-4 text-start'>{title}</h2>    
            <h3 className=' text-4xl p-5'>{description}</h3>
            </div>
        </div>    
    );
};

export default Card;