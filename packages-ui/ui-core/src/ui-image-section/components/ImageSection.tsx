import React from 'react';
import { ImageSectionData } from '../types';


const ImageSection: React.FC<ImageSectionData> = (props) => {
    const {  imageUrl, imageAlt } = props;

    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start  ">
            <div>
                <img src={imageUrl} alt={imageAlt} className="h-50 rounded-xl" />
            </div>
            
            
        </div>
    );
};

export default ImageSection;