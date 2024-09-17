import React from 'react';
import { ImageCardData } from '../types';

const ImageCard: React.FC<ImageCardData> = (props) => {
    const { imageUrl, imageAlt } = props;
    return (
        <div className='p-4 rounded-box'>
            <img src={imageUrl} alt={imageAlt} className="rounded-box " />
        </div>
    );
};

export default ImageCard;
