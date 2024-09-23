import React from 'react';
import { ImageSectionData } from '../types';
import ImageSection from './ImageSection';

export type ImageSectionContainerProps = {
    imageSection: ImageSectionData[];
    initialHeights?: string[]; // Opciósan beállítható kezdő magasságok
};

const ImageSectionContainer: React.FC<ImageSectionContainerProps> = ({
    imageSection,
    initialHeights = [],
}) => {
    return (
        <div className="">
            {imageSection.map((section, i) => (
                <ImageSection
                    key={i}
                    imageUrl={section.imageUrl}
                    imageAlt={section.imageAlt}
                    initialHeight={initialHeights[i]} // Beállítjuk a kezdő magasságot
                />
            ))}
        </div>
    );
};

export default ImageSectionContainer;
