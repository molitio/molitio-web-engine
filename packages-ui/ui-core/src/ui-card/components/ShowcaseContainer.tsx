import React from 'react';
import { useAtom } from 'jotai';
import { ResourceGalleryRoot, initResourceGalleryStore, resourceGalleryAtomRW } from '../../context';
import ShowcaseBranch from './ShowcaseBranch';
import ShowcaseItem from './ShowcaseItem';
import type { ShowcaseData } from '../types';

export type ShowcaseContainerProps = {
    resourceGalleryData: ResourceGalleryRoot;
};

const ShowcaseContainer: React.FC = (props) => {
    const [resourceGalleryRoot] = useAtom(resourceGalleryAtomRW);

    return (
        <div
            className={`
        bg-primary
        grid 
        sm:grid-cols-3 
        gap-4 
        sm:gap-6 
        mt-4 
        sm:mt-8
        `}
        >
            {Object.keys(resourceGalleryRoot).map((branch) => (
                <ShowcaseBranch resourceGalleryBranch={resourceGalleryRoot[branch]} key={branch} />
            ))}
        </div>
    );
};

export default ShowcaseContainer;
