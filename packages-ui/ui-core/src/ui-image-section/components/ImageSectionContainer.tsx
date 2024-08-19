import React from 'react';
import { ImageSectionData } from '../types';
import ImageSection from './ImageSection';

export type ImageSectionContainerProps = {
    imageSection: ImageSectionData[];
    parallaxFactors?: number[]; // Extra prop a parallax tényezőkhöz
    initialHeights?: string[]; // Opciósan beállítható kezdő magasságok
};

const ImageSectionContainer: React.FC<ImageSectionContainerProps> = ({
    imageSection,
    parallaxFactors = [],
    initialHeights = [],
}) => {
    return (
        <div className="w-screen">
            {imageSection.map((section, i) => (
                <ImageSection
                    key={i}
                    imageUrl={section.imageUrl}
                    imageAlt={section.imageAlt}
                    parallaxFactor={parallaxFactors[i]} // Beállítjuk a tényezőt
                    initialHeight={initialHeights[i]} // Beállítjuk a kezdő magasságot
                />
            ))}
        </div>
    );
};

export default ImageSectionContainer;
