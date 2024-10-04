import React from 'react';
import { ImageSectionData } from '../types';

const ImageSection: React.FC<ImageSectionData> = (props) => {
    const { imageUrl, imageAlt } = props;

    return (
        <div className="w-full">
            <img src={imageUrl} alt={imageAlt} className="absolute left-0 w-full h-full object-cover" />
        </div>
    );
};

export default ImageSection;
