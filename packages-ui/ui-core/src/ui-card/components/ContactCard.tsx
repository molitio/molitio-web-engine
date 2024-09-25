import React from 'react';
import { CardData } from '../types';
import '../style/style.css';

const ContactCard: React.FC<CardData> = (props) => {
    const { title, imageUrl, imageAlt, description } = props;
    return (
        <div
            className={
                'flex flex-col items-center gap-4 sm:gap-6 my-3 rounded-box font-press-start bg-secondary p-3 hover:bg-base-content'
            }
        >
            
            <div className="flex-1 card-body flex flex-col justify-center items-center text-center text-white">
                <h3 className="card-title "> {title}</h3>
                <p className="text-2xl font-bold  underline">{description}</p>
            </div>
        </div>
    );
};

export default ContactCard;
