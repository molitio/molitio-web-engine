import React from 'react';
import type { ImageCardData } from '../types';
import ImageCard from './ImageCard';

export type ImageCardContainerProps = {
    cards: ImageCardData[];
};

const ImageCardContainer: React.FC<ImageCardContainerProps> = (props) => {
    const { cards } = props;

    return (
        <div
            className={`
        bg-primary
        flex
        mb-4
        pl-10
        sm:grid-cols-7
        rounded-box 
        `}
        >
            {cards.map((card, i) => (
                <ImageCard key={i} imageUrl={card.imageUrl} imageAlt={card.imageAlt} />
            ))}
        </div>
    );
};

export default ImageCardContainer;
