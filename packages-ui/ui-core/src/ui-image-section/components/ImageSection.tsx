// ImageSectionContainer.tsx
'use client';
import React, { useState } from 'react';
import { ImageSectionData } from '../types';

interface ImageSectionProps extends ImageSectionData {
    initialHeight?: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({
    imageUrl,
    imageAlt,
    initialHeight = '800px',
}) => {
    const [containerHeight] = useState(initialHeight);

    return (
        <div className="relative w-full overflow-hidden" style={{ height: containerHeight }}>
            <img
                src={imageUrl}
                alt={imageAlt}
                className="absolute left-0 w-full h-full object-cover"
            />
        </div>
    );
};

export default ImageSection;

