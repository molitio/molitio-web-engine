// ImageSectionContainer.tsx
"use client";
import React, { useEffect, useState } from 'react';
import { ImageSectionData } from '../types';

interface ImageSectionProps extends ImageSectionData {
    parallaxFactor?: number;
    initialHeight?: string;
}

const ImageSection: React.FC<ImageSectionProps> = ({ imageUrl, imageAlt, parallaxFactor = 0.2, initialHeight = '800px' }) => {
    const [scrollY, setScrollY] = useState(0);
    const [containerHeight, setContainerHeight] = useState(initialHeight);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setScrollY(window.scrollY);
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const newHeight = Math.max(2300 - scrollY * 0.1, 1000);
        setContainerHeight(`${newHeight}px`);
    }, [scrollY]);

    return (
        <div className="relative w-full overflow-hidden" style={{ height: containerHeight }}>
            <img
                src={imageUrl}
                alt={imageAlt}
                className="absolute left-0 w-full h-full object-cover"
                style={{
                    transform: `translateY(${scrollY * parallaxFactor}px)`,
                    transformStyle: 'preserve-3d',
                }}
            />
        </div>
    );
};

export default ImageSection;

