import React from 'react';
import { ImageSectionData } from '../types';
import ImageSection from './ImageSection';

export type ImageSectionContainerProps = {
    imageSection: ImageSectionData[];
};

const ImageSectionContainer: React.FC<ImageSectionContainerProps> = ({ imageSection = [] }) => {
    return (
        <div className="">
            {imageSection.map((section, i) => (
                <ImageSection key={i} imageUrl={section.imageUrl} imageAlt={section.imageAlt} />
            ))}
        </div>
    );
};

export default ImageSectionContainer;
