import React from 'react';
import type { ImageSectionData } from '../types';
import ImageSection from './ImageSection';

export type ImageSectionContainerProps = {
    imageSection: ImageSectionData[];
};

const ImageSectionContainer: React.FC<ImageSectionContainerProps> = (props) => {
    const { imageSection } = props;
    return (
        <div>
            <div className=" text-white rounded-box w-screen">
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