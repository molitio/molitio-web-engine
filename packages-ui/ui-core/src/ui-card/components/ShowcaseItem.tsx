import React from 'react';
import { CardData } from '../types';

const ShowcaseItem: React.FC<CardData> = (props) => {
    const { title, subtitle } = props;
    return (
        <div 
            onClick={() => {
                console.log(`${title} clicked`);
            }}
        >
        
            {title} <br />
            {subtitle}    
        </div>
    );
}; 

export default ShowcaseItem;

