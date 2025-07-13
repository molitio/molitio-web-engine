import React from 'react';
import type { ImageCardData } from '../types';
import ImageCard from './ImageCard';
import { useAtom } from 'jotai';
/* import { contentRootAtomRW } from '../../context'; */

const ImageCardContainer: React.FC = () => {
    /*    const [contentRoot] = useAtom(contentRootAtomRW);
 TODO: fix with context refactor MWE-205
 */
    const contentRootLeafs = /*  contentRoot['home']?.leafs ?? */ {} as Record<string, any>;
    const imageCardData: ImageCardData[] =
        (contentRootLeafs['imageCards']?.textContentCollection as ImageCardData[]) ?? [];

    // add validation to proper type checking for the component

    return (
        <div className={'bg-primary flex sm:grid-cols-7 rounded-box p-4'}>
            {imageCardData.map((card, i) => (
                <ImageCard key={i} imageUrl={card.imageUrl} imageAlt={card.imageAlt} />
            ))}
        </div>
    );
};

export default ImageCardContainer;
