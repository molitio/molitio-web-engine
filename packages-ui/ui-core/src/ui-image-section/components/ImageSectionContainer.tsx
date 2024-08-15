import React from 'react';
import type { ImageSectionData } from '../types';
import ImageSection from './ImageSection';

export type ImageSectionContainerProps = {
    imageSection: ImageSectionData[];
};

const ImageSectionContainer: React.FC<ImageSectionContainerProps> = (props) => {
    const { imageSection } = props;
    return (
        <div className="w-screen">
            <div className="text-white h-[600px]">
                {imageSection.map((section, i) => (
                    <ImageSection
                        key={i}
                        imageUrl={section.imageUrl}
                        imageAlt={section.imageAlt}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSectionContainer;
