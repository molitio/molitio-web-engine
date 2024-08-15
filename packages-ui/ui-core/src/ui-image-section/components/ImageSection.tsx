"use client";
import React, { useEffect, useState } from 'react';
import { ImageSectionData } from '../types';

const ImageSection: React.FC<ImageSectionData> = (props) => {
    const { imageUrl, imageAlt } = props;
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            requestAnimationFrame(() => {
                setScrollY(window.scrollY);
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden">
            <img
                src={imageUrl}
                alt={imageAlt}
                className="absolute left-0 w-full h-full object-cover"
                style={{
                    transform: `translateY(${scrollY * 0.2}px)`,
                    transformStyle: 'preserve-3d',
                    height: '120%',
                }}
            />
        </div>
    );
};

export default ImageSection;


