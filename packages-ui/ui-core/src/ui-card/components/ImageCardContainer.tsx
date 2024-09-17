import React from 'react';
import type { ImageCardData } from '../types';
import ImageCard from './ImageCard';
import { useAtom } from 'jotai';
import { contentRootAtomRW } from '../../context';
export type ImageCardContainerProps = {
    cards: ImageCardData[];
};

const ImageCardContainer: React.FC<ImageCardContainerProps> = (props) => {
    const [contentRoot] = useAtom(contentRootAtomRW);
    const contentRootLeafs = contentRoot['home']?.leafs ?? {};
    const imageCardData: ImageCardData[] = contentRootLeafs['imageCards']?.textContentCollection ?? [];
    const { cards } = props;

    return (
        <div
            className={"bg-primary flex sm:grid-cols-7 rounded-box p-4"}
        >
            {imageCardData.map((card, i) => (
                <ImageCard key={i} imageUrl={card.imageUrl} imageAlt={card.imageAlt} />
            ))}
        </div>
    );
};

export default ImageCardContainer;
