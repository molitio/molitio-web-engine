import React from 'react';
import { ImageCardData } from '../types';

import '../style/style.css';

const ImageCard: React.FC<ImageCardData> = (props) => {
    const { imageUrl, imageAlt} = props;
    return (
        <div >
            <img src={imageUrl} alt={imageAlt} className="w-1/2 rounded-full " />
        </div>

    );
};

export default ImageCard;